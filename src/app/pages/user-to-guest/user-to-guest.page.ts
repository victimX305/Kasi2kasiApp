import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UserRegistrationService } from 'src/app/user-registration.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

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

function validPhoneNumber(control: AbstractControl): ValidationErrors | null {
  const phoneNumber = control.value;

  // Check if the phone number contains exactly 10 digits
  if (/^\d{13}$/.test(phoneNumber)) {
    return null; // It's a valid phone number
  } else {
    return { invalidPhoneNumber: true }; // Indicates an invalid phone number
  }
}

@Component({
  selector: 'app-user-to-guest',
  templateUrl: './user-to-guest.page.html',
  styleUrls: ['./user-to-guest.page.scss'],
})
export class UserToGuestPage implements OnInit {
  @ViewChild('fileInput') fileInput:any;
  @ViewChild('fileInputT') fileInputT:any;
  termsAccepted: boolean = false;

  guestInfor: {
    idNumber: string;
    StageName: string;
    ArtistType: string;
    SocialMediaLinks: string;
    YouTubeLink: string;
    idImg: string | null; // You would typically store the URL of the uploaded poster here
    selfieImg: string | null; // You would typically store the URL of the uploaded poster here
    termsAccepted: boolean;
    verified: boolean;

  } = {
    idNumber: '',
    StageName: '',
    ArtistType: '',
    SocialMediaLinks: '',
    YouTubeLink: '',
    idImg: null,
    selfieImg: null,
    termsAccepted: false,
    verified: false,
  };


  myForm = new FormGroup({
    idNumber: new FormControl ('',  [Validators.required, Validators.maxLength(13), numericOnly,  validPhoneNumber]),
    StageName: new FormControl ('', [Validators.required]),
    ArtistType: new FormControl ('', [Validators.required]),
    SocialMediaLinks: new FormControl ('', [Validators.required]),
    YouTubeLink: new FormControl ('', [Validators.required]),
    idImg: new FormControl(null, [Validators.required, requiredFileSelected()]), // Example: Only allow jpg files
    selfieImg: new FormControl(null, [Validators.required, requiredFileSelected()]), // Example: Only allow jpg files

  })
  userDataB: any;

  //userDataB: any;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private userService: UserRegistrationService,
    private router: Router,
    private apiService: ApiService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
  ) { 
    this.route.queryParams.subscribe((params) => {
      if (params && params['basicInfo']) {
        this.userDataB = JSON.parse(params['basicInfo']);
      }
    });
  }

  loginDetail(){
    this.guestInfor.idNumber = '';
    this.guestInfor.StageName = '';
    this.guestInfor.ArtistType = '';
    this.guestInfor.SocialMediaLinks = ''; 
    this.guestInfor.YouTubeLink = ''; 
    this.guestInfor.idImg = ''; 
    this.guestInfor.selfieImg = '';
    
    console.log('Textboxes are now empty.')
    
  }
  
         clearPlaceholder() {
         const label = document.querySelector('ion-label');
         if (label) {
         label.textContent = 'Social Media';
        }
      }

       showFileInput(inputId: String) {
           if (inputId === 'fileInput') {
          this.fileInput.nativeElement.click();
        
           } else if (inputId === 'fileInputT') {
            this.fileInputT.nativeElement.click();
        
          } 
       }

             
             async onFileChange(event: any, imgType: string) {
              const loading = await this.presentLoading();
                const file = event.target.files[0];
              
                if (file) {
                  // Generate a unique file path
                  const filePath = `users/${Date.now()}_${file.name}`;
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
                      this.guestInfor.idImg = downloadURL;
                      await loading.dismiss();
            
                    }// Update eventOrganizerInfor with the download URL
                    else if (imgType === 'selfieImg') {
                      this.guestInfor.selfieImg = downloadURL;
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
              
                      // Directly reference the document by UID
                      const userDocRef = this.afs.doc(`users/${uid}`);
                      const userDocSnapshot = await userDocRef.get().toPromise();
              
                      if (userDocSnapshot.exists) {
                        const existingUserData: any = userDocSnapshot.data();
              
                        // Combine existing data with new data
                        const combinedData = { ...existingUserData, ...this.guestInfor, verified: false };
                        // Automatically change the registrationType to 'guest'
                        combinedData.registrationType = 'guest';
              
                        // Debugging: Log the combined data
                        console.log('Combined Data:', combinedData);
              
                        // Update the existing document with the combined data
                        try {
                          await userDocRef.update(combinedData);
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

}
