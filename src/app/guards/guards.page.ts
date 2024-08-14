import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavParams, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.page.html',
  styleUrls: ['./guards.page.scss'],
})
export class GuardsPage implements OnInit {
  user: any;

  constructor(
    private firestore: AngularFirestore,
    private navParams: NavParams,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.user = this.navParams.get('user');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  openPDFInNewTab() {
    window.open(this.user.idImg, '_blank');
  }

  async deleteAccount2() {
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

        // Redirect the user to a sign-in page or home page
        this.router.navigate(['/v']);
      } else {
        console.error('No user is currently authenticated.');
      }
    } catch (error) {
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
      // Delete user document from Firestore 'users' collection
      await this.firestore.doc(`users/${userId}`).delete();
      console.log('User document is deleted.');

      const toast = await this.toastController.create({
        message: 'User account deleted successfully.',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      toast.present();

    } catch (error) {
      console.error('Error deleting user data:', error);
      // Handle error and provide appropriate message to user

      const toast = await this.toastController.create({
        message: 'An error has occured.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();

    }
  }
}
