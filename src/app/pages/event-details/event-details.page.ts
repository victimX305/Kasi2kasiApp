import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Signup2Page } from '../signup2/signup2.page';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  @Input() eventData: any;
  events: any[] = [];

  getLocationText2(suburb: any): string {
    
    if (Array.isArray(suburb)) {
      // If suburb is an array, concatenate the name and add to location text
      return  suburb.map(item => item.name).join(', ');
    } else if (typeof suburb === 'object' && suburb.hasOwnProperty('name')) {
      // If suburb is an object with 'name' property, add name to location text
      return suburb.name;
    } else {
      // If suburb is neither an array nor an object with 'name' property, add suburb itself
      return suburb;
    }
  }

  getLocationText1(city: any): string {

    if (Array.isArray(city)) {
      // If city is an array, concatenate the names and add to location text
       return city.map(item => item.names).join(', ');
      } else if (typeof city === 'object' && city.hasOwnProperty('names')) {
        // If city is an object with 'names' property, return the names
        return city.names;
      } else {
        // If city is neither an array nor an object with 'names' property, return the city itself
        return city;
      }

  }

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private firestore: AngularFirestore
  ) { }

  async openYoutubeModal(youtubeLink: string) {
    const embedLink = this.getEmbeddableLink(youtubeLink);

    const modal = await this.modalController.create({
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

  setEventReminder() {
    // Replace these values with your event's start time and title
    const eventStartTime = new Date('2023-10-26T12:00:00');
    const eventTitle = 'Your Event Title';

    // Calculate the time difference (in milliseconds) between the current time and the event's start time
    const currentTime = new Date();
    const timeDifference = eventStartTime.getTime() - currentTime.getTime();

    // Calculate when to trigger the reminder (e.g., 30 minutes before the event)
    const reminderTime = timeDifference - 30 * 60 * 1000; // 30 minutes in milliseconds

    // Use setTimeout to trigger the reminder
    setTimeout(() => {
      this.showReminder(eventTitle);
    }, reminderTime);
  }

  async showReminder(eventTitle: string) {
    // Use Ionic's AlertController to show a popup notification
    const alert = await this.alertController.create({
      header: 'Event Reminder',
      message: `Don't forget your "${eventTitle}" event!`,
      buttons: ['OK']
    });
    await alert.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  
  ngOnInit() {
  }

}
