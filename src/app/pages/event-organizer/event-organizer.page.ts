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
  selector: 'app-event-organizer',
  templateUrl: './event-organizer.page.html',
  styleUrls: ['./event-organizer.page.scss'],
})
export class EventOrganizerPage implements OnInit {
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private userService: UserRegistrationService,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private apiService: ApiService,
    private loadingController: LoadingController,
    private toastController: ToastController,
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['basicInfo']) {
        this.userDataB = JSON.parse(params['basicInfo']);
      }
    });

    
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

  async signOutAndProceedWithRegistration() {
    try {
      await this.afAuth.signOut();
      this.submitForm(); // Call the submitForm function after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
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
    // The code for submitting the form goes here
    const loading = await this.presentLoading(); // Show loading popup

    if (!this.termsAccepted) {
      console.error('Terms and Conditions not accepted');
      return;
    }

    if(this.myForm.valid){

    const { email, password } = this.userDataB;

    // Create the user in Firebase Authentication
    try {
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
          ...this.eventOrganizerInfor,
          termsAccepted: this.termsAccepted,
          uid: user.uid, // Include the user's UID in Firestore data
          proPic: 'assets/no-image-icon-0.png', // Static image reference

        };

        // Store combineData in your Firestore collection

        console.log('User Data to be stored:', combineData);
        await this.apiService.setDocuments(`users/${user.uid}`, combineData);

        console.log('Successfully registered');
        this.router.navigate(['/login']);
        this.presentSuccessToast('Successfully registered');

        await user.sendEmailVerification();
        this.presentSuccessToast('Verification email sent. Please check your email.');
             
        this.loginDetail();
        
      } else {
        console.error('User not created.');

        const toast = await this.toastController.create({
          message: 'User cannot created.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
        return;  
      }
    } catch (error) {
      console.error('Error creating user:', error);

      const toast = await this.toastController.create({
        message: 'The email address is already used by another account.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
      return;   

    }
  }else{
    console.log('Please make sure that all fields are filled.');
        //return;
  
        const toast = await this.toastController.create({
          message: 'Please fill in all required fields.',
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

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }
}


/////////////////////////////////////

