import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-deactivate-account',
  templateUrl: './deactivate-account.page.html',
  styleUrls: ['./deactivate-account.page.scss'],
})
export class DeactivateAccountPage implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  async deleteAccount() {
    const loading = await this.presentLoading(); // Show loading popup

    try {
      const user = await this.afAuth.currentUser;

      if (user) {
        // Remove user data from Firestore 'users' collection
        await this.deleteUserData(user.uid);

        // Delete the user account
        await user.delete();

        // Sign the user out
        await this.afAuth.signOut();

        const toast = await this.toastController.create({
          message: 'User account deleted successfully.',
          duration: 2000,
          position: 'bottom',
          color: 'success',
        });
        toast.present();

        // Redirect the user to a sign-in page or home page
        this.router.navigate(['/landing-page']);
      } else {
        console.error('No user is currently authenticated.');
      }
    } catch (error) {

      const toast = await this.toastController.create({
        message: 'An error has occured. Please login again and retry.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();

      console.error('Error deleting account:', error);
      // Handle error and provide appropriate message to user
      
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

  async deleteUserData(userId: string) {
    try {
      // Delete user document from Firestore 'EventOrganizers' collection
      await this.firestore.doc(`users/${userId}`).delete();
      console.log('User document is deleted.');

    } catch (error) {
      console.error('Error deleting user data:', error);
      // Handle error and provide appropriate message to user
    }
  }

  ngOnInit() {
  }

  navigateToHome(){
    this.router.navigate(['/event-org-home'])
  }
}


