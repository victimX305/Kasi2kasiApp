import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { GuestRegService } from 'src/app/guestReg.service';


function validRegistrationNumber(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  // Check if the value matches the required pattern '0000/000000/00'
  if (!/^\d{4}\/\d{6}\/\d{2}$/.test(value)) {
    return { invalidRegistrationNumberFormat: true };
  }

  return null;
}

function numericOnly(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!/^\d+$/.test(value)) {
    return { numeric: true };
  }
  return null;
}

function validTaxNum(control: AbstractControl): ValidationErrors | null {
  const taxNumber = control.value;

  // Check if the tax number starts with '9' and contains exactly 10 digits
  if (/^9\d{9}$/.test(taxNumber)) {
    return null; // It's a valid tax number
  } else {
    return { invalidTaxNum: true }; // Indicates an invalid tax number
  }
}

@Component({
  selector: 'app-guest-to-event',
  templateUrl: './guest-to-event.page.html',
  styleUrls: ['./guest-to-event.page.scss'],
})
export class GuestToEventPage implements OnInit {

  newData2: {
   CompanyName: string;
   RegistrationNumber: string;
    TaxNumber: string,
  } = {
    CompanyName: '',
    RegistrationNumber: '',
    TaxNumber: ''
   
  }

  myForm = new FormGroup({
    RegistrationNumber: new FormControl('', [Validators.required, validRegistrationNumber]),
    CompanyName: new FormControl ('', [Validators.required]),
    TaxNumber: new FormControl('', [Validators.required, numericOnly, validTaxNum]),

  })

  constructor(
    private guestRegService: GuestRegService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,

  ) { }

  loginDetail(){
    this.newData2.RegistrationNumber = '';
    this.newData2.CompanyName = '';
    this.newData2.TaxNumber = '';
    
    
    console.log('Textboxes are now empty.')
    
  }
  // Function to format Registration Number with slashes
  formatRegistrationNumber(value: string): string {
    const trimmedValue = value.replace(/\//g, ''); // Remove existing slashes
    let formattedValue = trimmedValue.replace(/\D/g, ''); // Remove non-digit characters
  
    // Insert slashes at specific positions to match '0000/000000/00' format
    if (formattedValue.length > 0) {
      formattedValue = formattedValue.substring(0, 4) + '/' +
                       formattedValue.substring(4, 10) + '/' +
                       formattedValue.substring(10, 12);
    }
    
    return formattedValue;
  }
  
  
  // Function to handle input change in Registration Number field
  onRegistrationNumberChange(event: any) {
    const value = event.target.value;
    const formattedValue = this.formatRegistrationNumber(value);
    this.newData2.RegistrationNumber = formattedValue;
  }

  async submitForm() {
    const loading = await this.presentLoading(); // Show loading popup

   // const loading = await this.presentLoading(); // Show loading popup

    if(this.myForm.valid){

    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        // Assuming newData is an object containing new user data
        const uid = user.uid;

          // Directly reference the document by UID
          const userDocRef = this.afs.doc(`users/${uid}`);
          const userDocSnapshot = await userDocRef.get().toPromise();
  
          if (userDocSnapshot.exists) {
            const existingUserData: any = userDocSnapshot.data();
  
            // Combine existing data with new data
            const combinedData = { ...existingUserData, ...this.newData2, verified: false };
            // Automatically change the registrationType to 'GuestEvent'
            combinedData.registrationType = 'GuestEvent';
  
            // Debugging: Log the combined data
            console.log('Combined Data:', combinedData);
  
            // Update the existing document with the combined data
            try {
              await userDocRef.update(combinedData);
              console.log(`Document with ID: ${uid} updated successfully`);

              // Delete related feedback from feedback collection
              await this.deleteFeedback(uid);
  
              // Update your service to clear the existing data
              this.guestRegService.clearUserData();
  
              const toast = await this.toastController.create({
                message: 'Guest account updated successfully.',
                duration: 2000,
                position: 'bottom',
                color: 'success',
              });
              toast.present();
  
              this.router.navigate(['/login']);
            } catch (updateError) {
              console.error('Error updating document:', updateError);
            }
          } else {
            console.error('User data not found.');
            this.router.navigate(['/login']);
          }
        } else {
          console.error('User not authenticated.');
        }
      } catch (error) {
        console.error('Error getting current user:', error);
      }

      finally{
        loading.dismiss(); 
        }
    } else {
      const toast = await this.toastController.create({
        message: 'Please fill in all fields.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
      return;
    }
  }

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    duration: 5000 // Set a duration or use dismiss() to manually dismiss it
  });
  await loading.present();
  return loading;
}

  // Method to delete feedback related to the user
  async deleteFeedback(uid: string) {
    try {
      const feedbackCollectionRef = this.afs.collection('feedback', (ref) => ref.where('uid', '==', uid));
  
      feedbackCollectionRef.snapshotChanges().subscribe((data) => {
        data.forEach(async (doc) => {
          await this.afs.collection('feedback').doc(doc.payload.doc.id).delete();
        });
        console.log('Related feedback documents deleted successfully.');
      });
    } catch (error) {
      console.error('Error deleting feedback documents:', error);
    }
  }

  ngOnInit() {
  }

  clearPlaceholder() {
    const label = document.querySelector('ion-label');
    if (label) {
    label.textContent = 'Social Media';
   }
 }
}
