import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-poster2',
  templateUrl: './poster2.page.html',
  styleUrls: ['./poster2.page.scss'],
})
export class Poster2Page implements OnInit {
 // Input property to receive event data
 @Input() eventData: any;
 @Input() item: any;

 //activeButton: string | null = null;
 reminderIcon = 'notifications-off'; // Initial icon name
 hasReminder: boolean = false;
 eventId: string;
 documentId: string;
 userEmail: string;
 organizerUid: string;
 events: any [] = [];
 organizer: any;

 constructor(
   private modalCtrl: ModalController,
   public alertController: AlertController,
   private firestore: AngularFirestore, // Inject AngularFirestore
   private afAuth: AngularFireAuth,
   private router: Router, // Inject AngularFireAuth
   private route: ActivatedRoute,
   private navCtrl: NavController

 ) { }
 

 cancel() {
   return this.modalCtrl.dismiss(null, 'cancel');
 }

 async onIconClick(iconId: string): Promise<void> {
   const icons = document.querySelectorAll('.icons');
   icons.forEach(icon => icon.classList.remove('active'));
 
   if (iconId === 'reminder') {
     this.reminderIcon = this.reminderIcon === 'notifications-off' ? 'notifications' : 'notifications-off';
 
     if (this.reminderIcon === 'notifications') {
       await this.notificationOn();
     }
     if (this.reminderIcon === 'notifications-off') {
       await this.notificationOff();
      // const reminderRemoved = await this.deleteReminderFromFirestore();
      // this.hasReminder = !reminderRemoved;
     }
   }

   const clickedIcon = document.getElementById(iconId);
   if (clickedIcon) {
     clickedIcon.classList.add('active');
   }
 }

 async notificationOn() {
   try {
    /* if (this.hasReminder) {
       console.log('Reminder already set.'); // Add a message to indicate the reminder is already set
       return;
     }*/
   const alert = await this.alertController.create({
     header: 'Notification On',
     message: 'You can check your reminders on the menu bar.',
     buttons: ['OK']
   });

   this.addReminderToFirestore();

   await alert.present();

 } catch (error) {
   console.error('Error:', error);
 }

 }

 async notificationOff() {

   try {
    /* if (!this.hasReminder) {
       console.log('Reminder already off.'); // Add a message to indicate the reminder is already off
       return;
     }*/
   const alert = await this.alertController.create({
     header: 'Notification Off',
     message: 'The reminder for this event is no longer available.',
     buttons: ['OK']
   });

   this.deleteReminderFromFirestore();

   await alert.present();

 }
 catch (error) {
   console.error('Error:', error);
 }

 }
 
 
 async ngOnInit() {
   this.route.params.subscribe(params => {
     this.documentId = params['documentId']; // Adjust the parameter name according to your route configuration
   });
 
   try {
     const user = await this.afAuth.currentUser;
 
     if (user && this.eventData && this.eventData.documentId) {
       const userId = user.uid;
 
       const reminderDocId = `${this.eventData.documentId}_${userId}`;
 
       const reminderDocRef = this.firestore.collection('reminders').doc(reminderDocId);
 
       const reminderDoc = await reminderDocRef.get().toPromise();
 
       if (reminderDoc && reminderDoc.exists) {
         this.hasReminder = true; // Set the flag to indicate a reminder is set
         this.reminderIcon = 'notifications'; // Set the reminder icon as 'notifications'
       }
     }
   } catch (error) {
     console.error('Error:', error);
   }

   
 }

 
 private async addReminderToFirestore() {
  
   const user = await this.afAuth.currentUser;
   
   if (user) {
     const userEmail = user.email;
     const userId = user.uid;
 
     const remindersCollection = this.firestore.collection('reminders');
     const reminderDoc = remindersCollection.doc(`${this.eventData.documentId}`).valueChanges();
 
     reminderDoc.subscribe((existingData: any )=> {
       const reminderData = {
         eventName: this.eventData.title,
         documentId: this.eventData.documentId,
         date: this.eventData.startDate,
         poster: this.eventData.posterUrl,
         userEmails: [userEmail],
         userIds: [userId],
         
       };
       console.log('Reminder Inserted successfully.');

       if (existingData) {
         reminderData.userEmails = Array.from(new Set([...existingData.userEmails, userEmail]));
         reminderData.userIds = Array.from(new Set([...existingData.userIds, userId]));
 
         remindersCollection
           .doc(`${this.eventData.documentId}_${userId}`)
           .update(reminderData);
           console.log('Reminder Updated successfully.');

       } else {
         remindersCollection
           .doc(`${this.eventData.documentId}_${userId}`)
           .set(reminderData);
       }
     });  
 }
 
}


private async deleteReminderFromFirestore() {
 try {
   const user = await this.afAuth.currentUser;

   if (user && this.eventData && this.eventData.documentId) {
     const userId = user.uid;

     const reminderDocId = `${this.eventData.documentId}_${userId}`;

     const reminderDocRef = this.firestore.collection('reminders').doc(reminderDocId);

     const reminderDoc = await reminderDocRef.get().toPromise(); // Convert Observable to Promise

     if (reminderDoc && reminderDoc.exists) {
       await reminderDocRef.delete();
       console.log('Reminder deleted successfully.');
       return true;
     } else {
       console.error('Reminder document not found.');
       return false;
     }
   } else {
     console.error('User, event data, or document ID not found.');
     return false;
   }
 } catch (error) {
   console.error('Error:', error);
   return false;
 }

}

}
