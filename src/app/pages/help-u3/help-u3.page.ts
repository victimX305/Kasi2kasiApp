import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ToastController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-help-u3',
  templateUrl: './help-u3.page.html',
  styleUrls: ['./help-u3.page.scss'],
})
export class HelpU3Page implements OnInit {
  message: string = '';
  fullname: string = '';
  email: string = '';
  replies: any[] = [];
  user: any;
  seen: boolean;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) {}

 // Method to get user full name by email
 getUserFullName(email: string): Observable<any> {
  return this.firestore.collection('users', ref => ref.where('email', '==', email)).valueChanges();
}

getReplies(email: string) {
  this.firestore.collection('replies', ref => 
    ref.where('email', '==', email)
       .orderBy('timestamp', 'desc')
       .limit(1)
  ).valueChanges().subscribe((data: any[]) => {
    this.replies = data;
  });
}

  ngOnInit() {
    this.afAuth.authState.subscribe((user: firebase.User | null) => {
      if (user) {
        this.email = user.email || '';
        this.getUserFullName(this.email).subscribe((data: any[]) => {
          if (data && data.length > 0) {
            this.fullname = data[0].fullname || '';
          }
        });
        this.getReplies(this.email);
      } else {
        console.error('User not authenticated');
      }
    });
    }

    async sendMessage() {
      const loading = await this.presentLoading();
      try {
        const user = await this.afAuth.currentUser;
        if (user) {
          const email = user.email || ''; // Get user's email if available
          await this.firestore.collection('help').add({
            email,
            message: this.message,
            fullname: this.fullname,
            seen: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          await loading.dismiss();
          const toast = await this.toastController.create({
            message: 'Message sent successfully.',
            duration: 2000,
            position: 'bottom',
            color: 'success',
          });
          toast.present();
        } else {
          console.error('User not authenticated');
          await loading.dismiss();
          const toast = await this.toastController.create({
            message: 'User not authenticated.',
            duration: 2000,
            position: 'bottom',
            color: 'danger',
          });
          toast.present();
        }
      } catch (error) {
        console.error('Error sending message:', error);
        await loading.dismiss();
        const toast = await this.toastController.create({
          message: 'Message sent unsuccessfully.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
      }
    }
    

  navigateToHome() {
    this.router.navigate(['/guest-home']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000 // Set a duration or use dismiss() to manually dismiss it
    });
    await loading.present();
    return loading;
  }
}
