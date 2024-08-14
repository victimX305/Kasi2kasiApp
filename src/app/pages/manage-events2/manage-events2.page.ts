import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-manage-events2',
  templateUrl: './manage-events2.page.html',
  styleUrls: ['./manage-events2.page.scss'],
})
export class ManageEvents2Page implements OnInit {

  selectedEvent: any;

  eventCount: number = 0;
  events: any[] = [];
  EventOrganizers: any [] = [];
  showNoMatchesMessage: boolean = false;
  filteredEvents: any[] = [];
  searchText: string = '';

  constructor(
    public alertController: AlertController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public actionSheetController: ActionSheetController

  ) {}

  ngOnInit() {
    // Fetch events data from Firestore
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userEmail = user.email;
        this.firestore
          .collection('events', (ref) => ref.where('organizer', '==', userEmail))
          .valueChanges()
          .subscribe((data: any[]) => {
            data.sort((a, b) => {
              const nameA = a.title?.toUpperCase() || '';
              const nameB = b.title?.toUpperCase() || '';
              return nameA.localeCompare(nameB);
            });
            this.events = data;
            this.eventCount = this.events.length;
           // this.events = this.filteredEvents;
            this.filterEvents();

          });
      }
    });
  }

  filterEvents() {
    if (this.searchText.trim() !== '') {
      this.filteredEvents = this.events.filter((event) =>
      event.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      // If searchText is empty, show all artists
      this.filteredEvents = [...this.events];
    }
    this.showNoMatchesMessage = this.filteredEvents.length === 0;
  }

  navigateToHome(){
    this.router.navigate(['/home-event-guest'])
  }

  editEvent(event: any) {
    console.log('Document ID of the event clicked:', event.documentId);
    this.router.navigate(['/edit-events2', event.documentId]);
  }
 
  delete(event:any){
    if (event && event.documentId) {
      this.firestore.collection('events').doc(event.documentId).delete()
        .then(() => {
          // Optional: If you want to remove the event from the local array
          const index = this.events.indexOf(event);
          if (index > -1) {
            this.events.splice(index, 1);
          }
          console.log('Event deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting event:', error);
        });
    } else {
      console.error('Event or document ID not found');
    }
  }

  async deleteEventFromReminders(event: any) {
    const remindersCollectionRef = this.firestore.collection('reminders', ref =>
      ref.where('documentId', '==', event.documentId)
    );
  
    try {
      const querySnapshot = await firstValueFrom(remindersCollectionRef.get());
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach(async doc => {
          try {
            await doc.ref.delete();
            console.log('Event deleted from reminders collection successfully');
          } catch (error) {
            console.error('Error deleting document from reminders collection:', error);
          }
        });
      } else {
        console.error('No matching document found in reminders collection');
      }
    } catch (error) {
      console.error('Error querying reminders collection:', error);
    }
  }


  async deleteEvent(event: any) {

    const docRef = this.firestore.collection('events').doc(event.documentId);
    
    try {
      const docSnapshot = await firstValueFrom(docRef.get());
      
      if (docSnapshot && docSnapshot.exists) { // Check for existence
        const eventData = docSnapshot.data();
        // Add the document to another collection (e.g., 'movedEvents')
        await this.firestore.collection('history').add(eventData);
        console.log('Document moved successfully');

        const alert = await this.alertController.create({
          header: 'Delete',
          message: 'Event deleted successfully.',
          buttons: ['OK']
        });
        
        await alert.present();
    

      } else {
        console.error('Document does not exist');
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }


    this.delete(event);  
    
    await this.deleteEventFromReminders(event);
    
  }

}
