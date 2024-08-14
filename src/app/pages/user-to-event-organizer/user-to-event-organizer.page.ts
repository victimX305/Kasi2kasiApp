import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UserRegistrationService } from 'src/app/user-registration.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';



function validRegistrationNumber(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  // Check if the value matches the required pattern '0000/000000/00'
  if (!/^\d{4}\/\d{6}\/\d{2}$/.test(value)) {
    return { invalidRegistrationNumberFormat: true };
  }

  return null;

}



function alphabeticCharacters(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!/^[A-Za-z\s]+$/.test(value)) {
    return { alphabetic: true };
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

function requiredFileSelected(): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value;

    if (!file) {
      return { requiredFileSelected: true };
    }

    return null;
  };
}

function validIdNumber(control: AbstractControl): ValidationErrors | null {
  const idNumber = control.value;

  // Check if the phone number contains exactly 10 digits
  if (/^\d{13}$/.test(idNumber)) {
    return null; // It's a valid phone number
  } else {
    return { invalidIdNumber: true }; // Indicates an invalid phone number
  }
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
  selector: 'app-user-to-event-organizer',
  templateUrl: './user-to-event-organizer.page.html',
  styleUrls: ['./user-to-event-organizer.page.scss'],
})
export class UserToEventOrganizerPage implements OnInit {
  @ViewChild('idImgInput') idImgInput: any;
  @ViewChild('selfieImgInput') selfieImgInput: any;
  termsAccepted: boolean = false;

  eventOrganizerInfor: {
    idNumber: string;
    CompanyName: string;
    RegistrationNumber: string;
    TaxNumber: string;
    idImg: string | null; // Change to store file reference (URL)
    selfieImg: string | null; // Change to store file reference (URL)
    termsAccepted: boolean;
    verified: boolean;

  } = {
    idNumber: '',
    CompanyName: '',
    RegistrationNumber: '',
    TaxNumber: '',
    idImg: null,
    selfieImg: null,
    termsAccepted: false,
    verified: false,

  };

  myForm = new FormGroup({
    idNumber: new FormControl ('',  [Validators.required, Validators.maxLength(13), numericOnly,  validIdNumber]),
    TaxNumber: new FormControl ('',  [Validators.required, Validators.maxLength(10), numericOnly, validTaxNum]),
    RegistrationNumber: new FormControl('', [Validators.required, validRegistrationNumber]),
    CompanyName: new FormControl ('', [Validators.required]),
    idImg: new FormControl(null, [Validators.required, requiredFileSelected()]), // Example: Only allow jpg files
    selfieImg: new FormControl(null, [Validators.required, requiredFileSelected()]), // Example: Only allow jpg files

  })

  userDataB: any;
  user: unknown;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private userService: UserRegistrationService,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private apiService: ApiService,
    private toastController: ToastController,
    private loadingController: LoadingController,

  ) {   
  }

  loginDetail(){
    this.eventOrganizerInfor.idNumber = '';
    this.eventOrganizerInfor.CompanyName = '';
    this.eventOrganizerInfor.RegistrationNumber = '';
    this.eventOrganizerInfor.TaxNumber = ''; 
    this.eventOrganizerInfor.idImg = ''; 
    this.eventOrganizerInfor.selfieImg = '';
    
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
    this.eventOrganizerInfor.RegistrationNumber = formattedValue;
  }



  showFileInput(inputId: string) {
    if (inputId === 'idImgInput') {
      this.idImgInput.nativeElement.click();
    } else if (inputId === 'selfieImgInput') {
      this.selfieImgInput.nativeElement.click();
    }
  }

  async onFileChange(event: any, imgType: string) {
    const loading = await this.presentLoading();
    const file = event.target.files[0];
  
    if (file) {
      // Generate a unique file path
      const filePath = `event-organizer/${Date.now()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task: AngularFireUploadTask = this.storage.upload(filePath, file);
  
      // Use promises to handle the asynchronous operations
      task.then((snapshot) => {
        // Wait for the upload to complete
        return snapshot.ref.getDownloadURL();
      })
      .then(async (downloadURL) => {
        // Update eventOrganizerInfor with the download URL
        if (imgType === 'idImg') {
          this.eventOrganizerInfor.idImg = downloadURL;
          await loading.dismiss();

        }// Update eventOrganizerInfor with the download URL
        else if (imgType === 'selfieImg') {
          this.eventOrganizerInfor.selfieImg = downloadURL;
          await loading.dismiss();
        }

      })
      .catch((error) => {
        console.error('Error uploading file: ', error);
      });
    }
  }

 

  async submitForm() {
    const loading = await this.presentLoading(); // Show loading popup

    if (this.myForm.valid) {
      try {
        const user = await this.afAuth.currentUser;
        if (user) {
          const uid = user.uid;
  
          // Use the user's UID to query the users collection
          const userDocRef = this.afs.collection('users', (ref) =>
            ref.where('uid', '==', uid).where('registrationType', '==', 'client')
          );
  
          userDocRef.snapshotChanges().subscribe(async (data) => {
            // Ensure only one document is retrieved for the user
            if (data.length === 1) {
              const userDoc = data[0].payload.doc;
              const existingUserData: any = userDoc.data();
  
              // Combine existing data with new data
              const combinedData = { ...existingUserData, ...this.eventOrganizerInfor, verified: false };
              // Automatically change the registrationType to 'partner'
              combinedData.registrationType = 'partner';
  
              // Debugging: Log the combined data
              console.log('Combined Data:', combinedData);
  
              // Update the existing document with the combined data
              try {
                await userDoc.ref.update(combinedData);
                console.log(`Document with ID: ${uid} updated successfully`);

  
                // Update your service to clear the existing data
                this.userService.clearUserData();
  
                const toast = await this.toastController.create({
                  message: 'Event organizer account updated successfully.',
                  duration: 2000,
                  position: 'bottom',
                  color: 'success',
                });
                toast.present();

                this.loginDetail();
  
                this.router.navigate(['/login']);
              } catch (updateError) {
                console.error('Error updating document:', updateError);
              }
            } else {
              console.error('User data not found or multiple documents found.');
              this.router.navigate(['/login']);
            }
          });
        } else {
          console.error('User not authenticated.');
        }
      } catch (error) {
        console.error('Error getting current user:', error);
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

    loading.dismiss(); 

  }
  
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000 // Set a duration or use dismiss() to manually dismiss it
    });
    await loading.present();
    return loading;
  }

ngOnInit() {
}

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'success',
    });
    toast.present();
  }
}


