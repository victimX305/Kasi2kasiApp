import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, validateEventsArray } from '@angular/fire/compat/firestore';
import { UserRegistrationService } from 'src/app/user-registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { error } from 'console';
import { getAuth } from 'firebase/auth';


@Component({
  selector: 'app-chat-signup',
  templateUrl: './chat-signup.page.html',
  styleUrls: ['./chat-signup.page.scss'],
})
export class ChatSignupPage implements OnInit {
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
  signupForm: FormGroup;
  isTypePassword: boolean = true;
  isLoading: boolean = false;
  currentUser: any;
  
  constructor(
    private router: Router,
    private userService: UserRegistrationService,
    private firestore: AngularFirestore,
    public FormBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private  athenticationService: AuthenticationService,
    private toastController: ToastController,
  ) {}

   updateRegistrationType() {
     this.isEventOrganizer = this.registrationType === 'partner';
     console.log('isEventOrganizer:', this.isEventOrganizer);
     this.isGuest = this.registrationType === 'guest';
     console.log('isGuest:', this.isGuest);
   } 
   togglePasswordVisibility() {
    this.isTypePassword = !this.isTypePassword;
  }
 
  

   async onSignup(){
    const { email, password } = this.basicInfor;

    // Check if the registration type is "client"
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
          uid: userCredential.user.uid,
         };
             // Register the user as a regular user in Firestore
             this.firestore
             .collection('users')
             .add(userData)
             .then(() => {
              console.log('Successfully registered as a regular user');
              this.router.navigate(['/chat-login']);
             })
             .catch((error: any) => {
              console.error('Error registering as a regular user:', error);
             });
      } else{
        console.log('Something went wrong with user registration');
      }
     } catch (error) {
      console.error('Error creating user:', error);
     }

    } else { 
      const UserDataB = {
        fullname: this.basicInfor.fullname,
          email: this.basicInfor.email,
          phonenumber: this.basicInfor.phonenumber,
          password: this.basicInfor.password,
          registrationType: this.registrationType,
          province: this.basicInfor.province,
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

   ngOnInit() { }

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

 
}
