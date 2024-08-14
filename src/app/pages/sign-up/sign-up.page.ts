import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, validateEventsArray } from '@angular/fire/compat/firestore';
import { UserRegistrationService } from 'src/app/user-registration.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { error } from 'console';
import { ApiService } from 'src/app/services/api.service';


function alphabeticCharacters(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  // Check if the value contains only alphabetic characters and spaces
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

function validPhoneNumber(control: AbstractControl): ValidationErrors | null {
  const phoneNumber = control.value;

  // Check if the phone number contains exactly 10 digits
  if (/^\d{10}$/.test(phoneNumber)) {
    return null; // It's a valid phone number
  } else {
    return { invalidPhoneNumber: true }; // Indicates an invalid phone number
  }
}

function zeroPhoneNumber(control: AbstractControl): ValidationErrors | null {
  const Number = control.value;

  // Check if the phone number contains exactly 10 digits
  if (/^0\d{9}$/.test(Number)) {
    return null; // It's a valid phone number
  } else {
    return { invalidNumber: true }; // Indicates an invalid phone number
  }
}


function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password === confirmPassword) {
    control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    //confirmPassword?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    
    //confirmPassword?.setErrors(null);
    control.get('confirmPassword')?.setErrors(null);
    return null;
  }
}




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  [x: string]: any;
  regForm: FormGroup | undefined;

  basicInfor: {
    fullname: string;
    email: string;
    phonenumber: string;
    password: string;
    province: string; 
  } = {
    fullname: '',
    email: '',
    phonenumber: '',
    password: '',
    province: '', 
  };
  isEventOrganizer: boolean = false;
  isGuest: boolean = false;
  registrationType: string = '';
  internetStatus: boolean = false;

  showPassword = false;

    //myForm: FormGroup;

    myForm = new FormGroup({
      fullname: new FormControl ('', [Validators.required, Validators.maxLength(50), alphabeticCharacters]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      phonenumber: new FormControl ('',  [Validators.required, Validators.maxLength(10), numericOnly, zeroPhoneNumber, validPhoneNumber]),
      password: new FormControl ('', [Validators.required,  Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)]),
      province: new FormControl ('',  [Validators.required]),
    
    })


  
  constructor(
    private router: Router,
    private userService: UserRegistrationService,
    private firestore: AngularFirestore,
    public formBuilder: FormBuilder,
    private apiService: ApiService,

    private loadingController: LoadingController,
    private afAuth: AngularFireAuth,
    
    private  athenticationService: AuthenticationService,
    private toastController: ToastController,

  ) {

    /*this.myForm = this.formBuilder.group({
 
      password: ['', [Validators.required, Validators.minLength(8), , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      confirmPassword: ['', [Validators.required]]
    
    });

    this.myForm.setValidators(this.passwordMatchValidator());*/

  }

  
   updateRegistrationType() {
     this.isEventOrganizer = this.registrationType === 'partner';
     console.log('isEventOrganizer:', this.isEventOrganizer);
     this.isGuest = this.registrationType === 'guest';
     console.log('isGuest:', this.isGuest);
   } 

  // In your component class
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }  

   async onSignup(){
    const loading = await this.presentLoading(); // Show loading popup

    //if (this.myForm.valid){
    const { email, password } = this.basicInfor;

    // Check if the registration type is "client"
    if(this.myForm.valid)
    {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
          console.log('Email address is badly formatted.');

          const toast = await this.toastController.create({
              message: 'Email address is badly formatted.',
              duration: 2000,
              position: 'bottom',
              color: 'danger',
          });
          toast.present();
          return null;
      }

    if (this.registrationType === 'client') {
     // Register with Firebase Authentication only if the user is a client
     try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email,password);
      const user = userCredential.user;

      if(user) {
        // Set the user's display name to their full name
    await user.updateProfile({
      displayName: this.basicInfor.fullname,
    });
         // Add the UID to the user data
         const userData = {
          fullname: this.basicInfor.fullname,
          email: this.basicInfor.email,
          phonenumber: this.basicInfor.phonenumber,
          password: this.basicInfor.password,
          registrationType: this.registrationType,
          province: this.basicInfor.province,
          uid: user.uid,
          proPic: 'assets/no-image-icon-0.png',

         };
         await this.apiService.setDocuments(`users/${user.uid}`, userData);
         await user.sendEmailVerification();
         this.presentSuccessToast('Verification email sent. Please check your email.');
         this.router.navigate(['/login']);
             
      } 
      
      else{
        console.log('Something went wrong with user registration');
        const toast = await this.toastController.create({
          message: 'Something went wrong with user registration.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
        return toast; 
      }
      //await this.apiService.setDocuments(`users/${user.uid}`, userData);
  
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

    } 
    else { 
      const UserDataB = {
        fullname: this.basicInfor.fullname,
          email: this.basicInfor.email,
          phonenumber: this.basicInfor.phonenumber,
          password: this.basicInfor.password,
          registrationType: this.registrationType,
          province: this.basicInfor.province, 
          photo: 'https://i.pravatar.cc/' + this.randomIntFromInterval(200, 400)

      };
      this.userService.setUserDataB(UserDataB);

       // Redirect to the appropriate registration page based on registrationType
       if (this.registrationType === 'partner') {
        // Navigate to the event organizer registration page
        this.router.navigate(['/event-organizer'], { queryParams: { basicInfor: JSON.stringify(UserDataB)}});

       } else if (this.registrationType === 'guest') {
        // Navigate to the guest registration page
      this.router.navigate(['/guest-register'], { queryParams: { basicInfor: JSON.stringify(UserDataB)}});
       }
    }
  }
  //}
  else{
    console.log('Cannot create event. Please fill in all required fields and make sure you have selected the location and guest buttons.');
    //return;

    const toast = await this.toastController.create({
      message: 'Please make sure that all fields are Filled.',
      duration: 2000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
    return null;
  }
  
    loading.dismiss(); // Dismiss loading popup regardless of success or failure
  
  return null;
  
   }
   
   randomIntFromInterval(min, max)
  {
    return Math.floor(Math.random() * (max-min + 1) + min);
  }

   ngOnInit() {
    this.checkInternetStatus();
    }

   get errorControl(){
     return this.regForm?.controls;
   }
  
   async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'success',
    });
    toast.present();
 }

 checkInternetStatus() {
  this.internetStatus = navigator.onLine;
  window.addEventListener('online', () => {
    this.internetStatus = true;
  });
  window.addEventListener('offline', () => {
    this.internetStatus = false;
  });
}

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    duration: 5000 // Set a duration or use dismiss() to manually dismiss it
  });
  await loading.present();
  return loading;
}

retry()
{
  window.location.reload(); // Refresh the page when data is fetched
}


 login(){
  this.router.navigate(['/login'])
}
}
