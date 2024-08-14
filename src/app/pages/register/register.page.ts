import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserRegistrationService } from 'src/app/user-registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
  regForm: any;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserRegistrationService,
    private firestore: AngularFirestore,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private authenticationService: AuthenticationService,
    private toastController: ToastController,
  ) {}

  updateRegistrationType() {
    this.isEventOrganizer = this.registrationType === 'partner';
    console.log('isEventOrganizer:', this.isEventOrganizer);
    this.isGuest = this.registrationType === 'guest';
    console.log('isGuest:', this.isGuest);
  }



  async onSignup() {
    const { fullname, email, phonenumber, password, province } = this.basicInfor;



    if (this.registrationType === 'client') {
      // Register with Firebase Authentication only if the user is a client
      try {
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        if (user) {
          // Add the UID to the user data
          const userData = {
            fullname,
            email,
            phonenumber,
            password,
            registrationType: this.registrationType,
            province,
            uid: user.uid,
          };

          // Register the user as a regular user in Firestore
          await this.firestore.collection('users').add(userData);
          console.log('Successfully registered as a regular user');
          this.router.navigate(['/login']);
        } else {
          console.log('Something went wrong with user registration');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    } else {
      const UserDataB = {
        fullname,
        email,
        phonenumber,
        password,
        registrationType: this.registrationType,
        province,
      };
      this.userService.setUserDataB(UserDataB);

      // Redirect to the appropriate registration page based on registrationType
      if (this.registrationType === 'partner') {
        // Navigate to the event organizer registration page
        this.router.navigate(['/event-organizer'], { queryParams: { basicInfor: JSON.stringify(UserDataB) } });
      } else if (this.registrationType === 'guest') {
        // Navigate to the guest registration page
        this.router.navigate(['/guest-register'], { queryParams: { basicInfor: JSON.stringify(UserDataB) } });
      }
    }
  }

  ngOnInit() {}

  get errorControl() {
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

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }
}
