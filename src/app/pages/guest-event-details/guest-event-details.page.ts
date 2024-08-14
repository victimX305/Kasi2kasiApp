import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/pages/prof-user/user.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-guest-event-details',
  templateUrl: './guest-event-details.page.html',
  styleUrls: ['./guest-event-details.page.scss'],
})
export class GuestEventDetailsPage implements OnInit {
  uid: string = '';
  feedback: string = '';
  timestamp: string = '';
  fullname: string = '';
  idNumber: string = '';
  CompanyName: string = '';
  RegistrationNumber: string = '';
  StageName: string = '';
  YouTubeLink: string = '';
  user: any;

  @ViewChild('idUrlInput') idUrlInput!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastController: ToastController,
    private firestore: AngularFirestore,
    private router: Router,
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    // Subscribe to changes in the authentication state
    this.userService.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        this.fetchFeedback();
        this.fetchGuestsEventOrganizerData();
      } else {
        // Handle the case where the user is not authenticated
        console.error('User not authenticated');
      }
    });
  }

  fetchGuestsEventOrganizerData() {
    this.firestore
      .collection('users', ref => ref.where('uid', '==', this.uid).where('verified', '==', false).where('registrationType', '==', 'GuestEvent'))
      .valueChanges()
      .subscribe((GuestseventOrganizerData: any[]) => {
        if (GuestseventOrganizerData.length > 0) {
          const data = GuestseventOrganizerData[0];
          this.fullname = data.fullname;
          this.idNumber = data.idNumber;
          this.CompanyName = data.CompanyName;
          this.RegistrationNumber = data.RegistrationNumber;
          this.YouTubeLink = data.YouTubeLink;
          this.StageName = data.StageName;
        } else {
          console.error('No GuestEvent data found for the user');
        }
      });
  }

  fetchFeedback() {
    this.firestore
      .collection('feedback', (ref) => ref.where('uid', '==', this.uid).orderBy('timestamp', 'desc'))
      .valueChanges()
      .subscribe((feedback: any[]) => {
        if (feedback.length > 0) {
          const latestFeedback = feedback[0];
          console.log('Latest Feedback:', latestFeedback);

          this.feedback = latestFeedback.feedback;
          this.timestamp = latestFeedback.timestamp;
        } else {
          this.feedback = "The user information is not verified, but will be in the next 24 hours of working days. Thank you";
          this.timestamp = '';
        }
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Updating user...',
    });
    await loading.present();
    return loading;
  }

  async updateUser() {
    const loading = await this.presentLoading();
 
    this.afAuth.authState.subscribe((user) => {
      if (user && user.email) {
        const userEmail = user.email;

        this.firestore
          .collection('users', (ref) => ref.where('email', '==', userEmail))
          .get()
          .subscribe((querySnapshot) => {
            if (!querySnapshot.empty) {
              const doc = querySnapshot.docs[0] as any;
              console.log('Document found');

              doc.ref
                .update({
                  CompanyName: this.CompanyName,
                  RegistrationNumber: this.RegistrationNumber,
                  idNumber: this.idNumber,
                  fullname: this.fullname,
                  YouTubeLink: this.YouTubeLink,
                  StageName: this.StageName
                })
                .then(async () => {
                  await loading.dismiss();
                  this.presentSuccessToast('User information updated successfully!');
                  this.router.navigate(['/login']);
                })
                .catch(async (error: any) => {
                  await loading.dismiss();
                  this.presentErrorToast('Error updating user information: ' + error.message);
                });
            } else {
              loading.dismiss();
              console.log('Document not found');
            }
          });
      } else {
        loading.dismiss();
        this.presentErrorToast('User not authenticated.');
      }
    });
  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    console.error(message);
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

  navigateToHome() {
    this.router.navigate(['/login']);
  }
}
