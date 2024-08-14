import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-chat-login',
  templateUrl: './chat-login.page.html',
  styleUrls: ['./chat-login.page.scss'],
})
export class ChatLoginPage implements OnInit {
  loginData = {
    email: '',
    password: '',
  };

  private querySnapshot: any;

  constructor(
    private router: Router,
    private authenticatioService: AuthenticationService,
    private toastController: ToastController,
    private firestore: AngularFirestore,
    
  ) {}

  async login() {
    console.log('Login button clicked');
    const { email, password } = this.loginData;
  
    // Trim the email to remove leading and trailing spaces
    const userEmail = email.trim();
  
    try {
      console.log('Attempting login...');
      // Call your AuthenticationService to handle login with email and password
      const userCredential = await this.authenticatioService.loginWithEmailAndPassword(email, password);
      console.log('Login successful:', userCredential.user);
  
      if (userCredential.user) {
        // Query each collection to find the user's registration type based on their email
        const collectionsToCheck = ['users', 'EventOrganizers', 'Guests', 'Admin', 'GueastEventorg'];
        let foundRegistrationType = '';
  
        for (const collectionName of collectionsToCheck) {
          const collectionRef = this.firestore.collection(collectionName);
          const query = collectionRef.ref.where('email', '==', userEmail);
  
          console.log(`Querying collection: ${collectionName} for email: ${userEmail}`);
  
          const querySnapshot = await query.get();
  
          console.log(`Query result for collection: ${collectionName}`);
          console.log('QuerySnapshot:', querySnapshot);
  
          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data() as { registrationType: string };
            foundRegistrationType = userData.registrationType;
            console.log('Found registration type:', foundRegistrationType);
            break; // Stop searching once we find a match
          }
        }
  
        if (foundRegistrationType) {
          // Redirect the user based on foundRegistrationType
          switch (foundRegistrationType) {
            case 'client':
              this.router.navigate(['/user-home']);
              break;
            case 'partner':
              this.router.navigate(['/event-org-home']);
              break;
            case 'guest':
              this.router.navigate(['/guest-home']);
              break;
            case 'GuestEvent':
              this.router.navigate(['/home-event-guest']);
              break;
            case 'Admin':
              this.router.navigate(['/admin']);
              
              break;
            default:
              // Handle other registration types or errors
              break;
          }
        } else {
          console.log('Registration type not found for this user.');
          // Handle the case where the user is not found in any of the collections
          // This could mean the user is not registered or there was an issue during registration
        }
      } else {
        console.log('User credential is null. Login may have failed.');
        // Handle the case where 'user' property is null (e.g., login failed)
        // You can display an error message to the user or take appropriate action
      }
    } catch (error) {
      // Handle login errors, e.g., display an error message to the user
      console.error('Error during login:', error);
      this.presentErrorToast('Please check your email address and password');
    }
  }
  
  
  
  

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }
  
  onFormSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.login(); // Call your login method
  }
  
  ngOnInit() {}
}
