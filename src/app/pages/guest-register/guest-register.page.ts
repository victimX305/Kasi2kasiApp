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
  selector: 'app-guest-register',
  templateUrl: './guest-register.page.html',
  styleUrls: ['./guest-register.page.scss'],
})
export class GuestRegisterPage implements OnInit {
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
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private userService: UserRegistrationService,
    private router: Router,
    private apiService: ApiService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
  ) { 
    this.route.queryParams.subscribe((params) => {
      if (params && params['basicInfo']) {
        this.userDataB = JSON.parse(params['basicInfo']);
      }
    });
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



              async register() {
                const loading = await this.presentLoading(); // Show loading popup

                //registering guests goes here
                if(!this.termsAccepted) {
                 console.error('Terms and conditions not accepted');
                 return null;
                }
           
                if(this.myForm.valid){
                const { email, password } = this.userDataB;
           
                // Create the user in Firebase Authentication
                try{
                 const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
                 const user = userCredential.user;
           
                 if (user) {
                   // Send email verification
                   //await user.sendEmailVerification();
                   await user.updateProfile({
                     displayName: this.userDataB.fullname,
                   });
                   // Combine the form data with user information
                   const combineData = {
                     ...this.userDataB,
                     ...this.guestInfor,
                     termsAccepted: this.termsAccepted,
                     uid: user.uid, // Include the user's UID in Firestore data
                     proPic: 'assets/no-image-icon-0.png',
                   };
           
                   // Store combineData in your Firestore collection
                   //await this.firestore.collection('Guests').add(combineData);
                   console.log('User Data to be stored:', combineData);
                   await this.apiService.setDocuments(`users/${user.uid}`, combineData);
             
                 
                 
           
                   console.log('Successfully registered');
                   await user.sendEmailVerification();
                   this.presentSuccessToast('Verification email sent. Please check your email.');
                   this.router.navigate(['/login']);
                   
                 }
                 else{
                   console.log('Something went wrong with user registration');
                   const toast = await this.toastController.create({
                    message: 'User cannot created.',
                    duration: 2000,
                    position: 'bottom',
                    color: 'danger',
                  });
                  toast.present();
                  return toast;  
                 }
                 const userData = {
                   id: user.uid
                 };
             
             
                 return userData;
                 
                 
               } catch (error) {
                console.error('Error creating user:', error);
      
                const toast = await this.toastController.create({
                  message: 'The email address is already used by another account.',
                  duration: 2000,
                  position: 'bottom',
                  color: 'danger',
                });
                toast.present();
                return toast;      
               }
               finally{
                loading.dismiss(); 
                }
             }

             else{
               console.log('Please fill in all required fields.');
               //return;
           
               const toast = await this.toastController.create({
                 message: 'Please make sure that all fields are filled.',
                 duration: 2000,
                 position: 'bottom',
                 color: 'danger',
               });
               toast.present();
               return null;       
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

     ngOnInit() {
      this.userDataB = this.userService.getUserDataB();
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


