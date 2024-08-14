import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { EventDetailsPage } from '../event-details/event-details.page';

@Component({
  selector: 'app-history3',
  templateUrl: './history3.page.html',
  styleUrls: ['./history3.page.scss'],
})
export class History3Page implements OnInit {

  selectedEvent: any;

  eventCount: number = 0;
  events: any[] = [];
  EventOrganizers: any [] = [];
  showNoMatchesMessage: boolean = false;
  filteredEvents: any[] = [];
  searchText: string = '';

  constructor(
    private modalController: ModalController,
    private router: Router,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    public actionSheetController: ActionSheetController
  ) {
    
   }


   openEventDetails(inforEvent: any){
    console.log('inforEvent data:', inforEvent); // Add this line to verify the data
    this.modalController.create({
      component: EventDetailsPage,
      componentProps: { 
        eventData: inforEvent, 
      },
    }).then((modalElement) => {
      modalElement.present();
    });
  }


   ngOnInit() {
    // Fetch events data from Firestore
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userEmail = user.email;
        this.firestore
          .collection('history', (ref) => ref.where('organizer', '==', userEmail))
          .valueChanges()
          .subscribe((data: any[]) => {
            data.sort((a, b) => {
              const nameA = a.title?.toUpperCase() || '';
              const nameB = b.title?.toUpperCase() || '';
              return nameA.localeCompare(nameB);
            });

            this.events = data;
            this.eventCount = this.events.length;
            this.filterEvents();

          });
      }
    });
  }

  navigateToHome(){
    this.router.navigate(['/home-event-guest'])
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

}
