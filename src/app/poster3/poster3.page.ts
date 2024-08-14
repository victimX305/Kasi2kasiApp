import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Signup2Page } from '../pages/signup2/signup2.page';

@Component({
  selector: 'app-poster3',
  templateUrl: './poster3.page.html',
  styleUrls: ['./poster3.page.scss'],
})
export class Poster3Page implements OnInit {

// Input property to receive event data
@Input() eventData: any;

//activeButton: string | null = null;
reminderIcon = 'notifications-off'; // Initial icon name
hasReminder: boolean = false;

events: any [] = [];
comments: {user: string, text: string}[] = [];
newcommentText: string = '';
currentUserName: string = '';
  documentId: any;

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
  private router: Router, // Inject AngularFireAuth
  private route: ActivatedRoute,
  private navCtrl: NavController

  
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

cancel() {
  return this.modalCtrl.dismiss(null, 'cancel');
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

fetchComments() {
  if (this.eventData && this.eventData.documentId) {
    this.firestore.collection(`events/${this.eventData.documentId}/comments`)
      .valueChanges().subscribe((comments: any[]) => {
        this.comments = comments;
      });
  }
}

}

