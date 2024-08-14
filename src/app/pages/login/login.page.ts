import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData = {
    email: '',
    password: '',
  };


  private querySnapshot: any;
  internetStatus: boolean = false;
  showPassword = false;

  constructor(
    private router: Router,
    private authenticatioService: AuthenticationService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
    
  ) {
    //this.retry();
    this.loginDetail(); 

    this.checkInternetStatus();
  }

  

  ngOnInit() {
    
  }

  loginDetail(){
    this.loginData.email = '';
    this.loginData.password = '';

    console.log('Textboxes are now empty.')
    
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async login() {
    const loading = await this.presentLoading(); // Show loading popup
  
    console.log('Login button clicked');
    const { email, password } = this.loginData;
  
    // Trim the email to remove leading and trailing spaces
    const userEmail = email.trim().toLowerCase();
  
    try {
      console.log('Attempting login...');
      // Call your AuthenticationService to handle login with email and password
      const userCredential = await this.authenticatioService.loginWithEmailAndPassword(userEmail, password);
      console.log('Login successful:', userCredential.user);
  
      await this.updateAuthState();

      
      // Check if the user is verified
     /* if (userCredential.user && !userCredential.user.emailVerified) {
        console.log('User email is not verified.');
  
        // Display an error message informing the user that they need to verify their email
        this.presentErrorToast('Please verify your email address to login.');
  
        // Log out the user to prevent unauthorized access
        await this.authenticatioService.logout();
  
        return;
      }*/
  
      if (userCredential.user) {
        // Query each collection to find the user's registration type based on their email
        const collectionsToCheck = ['users', 'Admin'];
        let foundRegistrationType = '';
        let userData = null;
  
        for (const collectionName of collectionsToCheck) {
          const collectionRef = this.firestore.collection(collectionName);
          const query = collectionRef.ref.where('email', '==', userEmail);
  
          console.log(`Querying collection: ${collectionName} for email: ${userEmail}`);
  
          const querySnapshot = await query.get();
  
          console.log(`Query result for collection: ${collectionName}`);
          console.log('QuerySnapshot:', querySnapshot);
  
          if (!querySnapshot.empty) {
            userData = querySnapshot.docs[0].data() as { registrationType: string, verified: boolean };
            foundRegistrationType = userData.registrationType;
  
            // Check if verification is required
            if (['partner', 'guest', 'GuestEvent'].includes(foundRegistrationType) && !userData.verified) {
              console.log('User is not verified.');
              switch (foundRegistrationType) {
                case 'guest':
                  console.log('Navigating to guest-details page for unverified guest.', userData);
                  this.router.navigate(['/guest-details-page'], { state: { user: userData } });
                  break;
                case 'GuestEvent':
                  console.log('Navigating to GuestEvent-Details page for unverified GuestEvent.', userData);
                  this.router.navigate(['/guest-event-details'], { state: { user: userData } });
                  break;
                case 'partner':
                  console.log('Navigating to user-details page for unverified Event Organizer.', userData);
                  this.router.navigate(['/user-details'], { state: { user: userData } });
                  break;
              }
              this.loginDetail();
              return;
            }
  
            console.log('Found registration type:', foundRegistrationType);
            break; // Stop searching once we find a match
          }
        }
  
        if (userData) {
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
            case 'A*':
              this.router.navigate(['/aa']);
              break;
            default:
              console.log('No valid registration type found.');
              break;
          }
          this.loginDetail();
        } else {
          console.log('No user data found.');
          this.presentErrorToast('Login failed. Please try again.');
        }
      } else {
        console.log('User credential is null. Login may have failed.');
        this.presentErrorToast('Login failed. Please try again.');
      }
    } catch (error) {
      // Handle login errors, e.g., display an error message to the user
      console.error('Error during login:', error);
      this.presentErrorToast('Please check your email address and password');
    } finally {
      loading.dismiss(); 
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


  async updateAuthState(): Promise<void> {
    return new Promise((resolve) => {
      const user = this.afAuth.currentUser;
  
      if (user) {
        user.then((currentUser) => {
          if (currentUser) {
            console.log('User before reload:', currentUser);

            currentUser.reload().then(() => {
              // The authentication state is updated after reloading the user
              console.log('User reloaded:', currentUser);
              resolve();
            });
          }
        });
      } else {
        console.log('No user to reload.');
        resolve();
      }
    });
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
  
  retry()
  {
    window.location.reload(); // Refresh the page when data is fetched
  }

  forgotpassword()
  {
    this.router.navigate(['/password-reset']);
    this.loginDetail(); 

  }

  signUp(){
    this.router.navigate(['/sign-up']);
    this.loginDetail(); 

  }

 
}
