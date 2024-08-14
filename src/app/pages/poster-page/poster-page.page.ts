import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { ChatingService } from 'src/app/services/chating.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Signup2Page } from '../signup2/signup2.page';


@Component({
  selector: 'app-poster-page',
  templateUrl: './poster-page.page.html',
  styleUrls: ['./poster-page.page.scss'],
})
export class PosterPagePage implements OnInit {
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
  comments: {user: string, text: string}[] = [];
  newcommentText: string = '';
  currentUserName: string = '';
 
  isModalOpen: boolean = false;
  safeOnlineEventLink: SafeResourceUrl;

  getLocationText2(suburb: any): string {
    if (!suburb) {
      return ''; // Return an empty string if suburb is null or undefined
    }
  
    if (Array.isArray(suburb)) {
      return suburb.map(item => item.name).join(', ');
    } else if (typeof suburb === 'object' && suburb.hasOwnProperty('name')) {
      return suburb.name;
    } else {
      return suburb;
    }
  }
  
  getLocationText1(city: any): string {
    if (!city) {
      return ''; // Return an empty string if city is null or undefined
    }
  
    if (Array.isArray(city)) {
      return city.map(item => item.names).join(', ');
    } else if (typeof city === 'object' && city.hasOwnProperty('names')) {
      return city.names;
    } else {
      return city;
    }
  }


  constructor(
    private modalCtrl: ModalController,
    public alertController: AlertController,
    private firestore: AngularFirestore, // Inject AngularFirestore
    private afAuth: AngularFireAuth,
    private chatingService: ChatingService,
    private router: Router, // Inject AngularFireAuth
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private authService: AuthService,
    private toastController: ToastController,
    private sanitizer: DomSanitizer

  ) { }

  async openYoutubeModal(youtubeLink: string) {
    const embedLink = this.getEmbeddableLink(youtubeLink);

    const modal = await this.modalCtrl.create({
      component: Signup2Page,
      componentProps: {
        youtubeUrl: embedLink // Pass the embeddable YouTube link to the modal
      }
    });

    return await modal.present();
  }

  private getEmbeddableLink(youtubeLink: string): string {
    // Extract video ID from regular YouTube link
    const videoId = this.getVideoIdFromLink(youtubeLink);
    // Generate embeddable YouTube link
    return `https://www.youtube.com/embed/${videoId}`;
  }

  private getVideoIdFromLink(youtubeLink: string): string {
    // Example: https://www.youtube.com/watch?v=VIDEO_ID
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = youtubeLink.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  }

  
  closeModal() {
    this.isModalOpen = false;
  }

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

  async addComment() {
    if (this.newcommentText.trim()) {
      const newComment = { user: this.currentUserName, text: this.newcommentText.trim() };
      this.comments.push(newComment);
      this.newcommentText = '';

      // Save the new comment to Firestore
      try {
        await this.firestore.collection(`events/${this.eventData.documentId}/comments`).add(newComment);
      } catch (error) {
        console.error('Error adding comment:', error);
      }
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

      if (user) {
        this.currentUserName = user.displayName || 'Anonymous'; // Fetch user's display name or set to 'Anonymous'
        
        if (this.eventData && this.eventData.documentId) {
          const userId = user.uid;
          const reminderDocId = `${this.eventData.documentId}_${userId}`;
          const reminderDocRef = this.firestore.collection('reminders').doc(reminderDocId);
          const reminderDoc = await reminderDocRef.get().toPromise();

          if (reminderDoc && reminderDoc.exists) {
            this.hasReminder = true; // Set the flag to indicate a reminder is set
            this.reminderIcon = 'notifications'; // Set the reminder icon as 'notifications'
          }

          // Fetch comments from Firestore
          this.firestore.collection(`events/${this.eventData.documentId}/comments`)
            .valueChanges().subscribe((comments: any[]) => {
              this.comments = comments;
            });
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


  // Method to navigate to chatroom
  openChat(eventData: any): void {
    // Extract the organizer's UID from the event data
    const eventOrganizerUid = eventData.organizerUid;

    // Get the logged-in user's UID
    this.authService.getLoggedInUid().subscribe(loggedInUid => {
      // Check if the logged-in user is the organizer
      if (loggedInUid === eventOrganizerUid) {
        // Present an error toast
        this.presentToast('You are the organizer of this event!', 'danger');
      } else {
        // Call the openChatWithOrganizer method with the organizer UID
        this.chatingService.openChatWithOrganizer(eventOrganizerUid);
      }
    });
  }

  async presentToast(message: string, color: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    await toast.present();
  }

}
