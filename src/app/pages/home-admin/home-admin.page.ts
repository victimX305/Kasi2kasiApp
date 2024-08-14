import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { error } from 'console';
import { GuestRegService } from 'src/app/guestReg.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserRegistrationService } from 'src/app/user-registration.service';



@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  newData: {
    StageName: string;
    ArtistType: string;
    SocialMediaLinks: string;
    YouTubeLink: string;
  } = {
    StageName: '',
    ArtistType: '',
    SocialMediaLinks: '',
    YouTubeLink: '',
  }

  myForm = new FormGroup({
    StageName: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    SocialMediaLinks: new FormControl ('', [Validators.required]),
    YouTubeLink: new FormControl ('',  [Validators.required]),
    ArtistType: new FormControl ('',  [Validators.required]),
  
  })
  
  constructor(
    private guestRegService: GuestRegService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    private userService: UserRegistrationService,
    private loadingController: LoadingController,

  ) { }

  loginDetail(){
    this.newData.StageName = '';
    this.newData.ArtistType = '';
    this.newData.SocialMediaLinks = ''; 
    this.newData.YouTubeLink = ''; 
  
    
    console.log('Textboxes are now empty.')
    
  }

  async submitForm() {
    if (this.myForm.valid) {
      try {
        const user = await this.afAuth.currentUser;
        if (user) {
          const uid = user.uid;
  
          // Use the user's UID to query the users collection
          const userDocRef = this.afs.collection('users', (ref) =>
            ref.where('uid', '==', uid).where('registrationType', '==', 'partner')
          );
  
          userDocRef.snapshotChanges().subscribe(async (data) => {
            // Ensure only one document is retrieved for the user
            if (data.length === 1) {
              const userDoc = data[0].payload.doc;
              const existingUserData: any = userDoc.data();
  
              // Combine existing data with new data
              const combinedData = { ...existingUserData, ...this.newData, verified: false };
              // Automatically change the registrationType to 'GuestEvent'
              combinedData.registrationType = 'GuestEvent';
  
              // Debugging: Log the combined data
              console.log('Combined Data:', combinedData);

              
              // Update the existing document with the combined data
              try {
                await userDoc.ref.update(combinedData);
                console.log(`Document with ID: ${uid} updated successfully`);

                // Delete related feedback from feedback collection
                await this.deleteFeedback(uid);
  
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
              console.error('User data not found or multiple documents found.');
              this.router.navigate(['/login']);
            }
          });
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
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000 // Set a duration or use dismiss() to manually dismiss it
    });
    await loading.present();
    return loading;
  }
  
  // Method to delete feedback related to the user
  async deleteFeedback(uid: string) {
    try {
      const feedbackCollectionRef = this.afs.collection('feedback', (ref) => ref.where('uid', '==', uid));
  
      feedbackCollectionRef.snapshotChanges().subscribe((data) => {
        data.forEach(async (doc) => {
          await this.afs.collection('feedback').doc(doc.payload.doc.id).delete();
        });
        console.log('Related feedback documents deleted successfully.');
      });
    } catch (error) {
      console.error('Error deleting feedback documents:', error);
    }
  }
  
   
  ngOnInit() {

    
  }

  clearPlaceholder() {
    const label = document.querySelector('ion-label');
    if (label) {
    label.textContent = 'Social Media';
   }
 }
}
