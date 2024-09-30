import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { EventDetailsPage } from '../event-details/event-details.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GigHistoryPage } from 'src/app/gig-history/gig-history.page';
import { GigService } from '../manage-gigs/gig.service';




type CustomUser = {
  StageName?: string;
};

type FirebaseUser = {
  uid: string;
};

@Component({
  selector: 'app-manage-gigs2',
  templateUrl: './manage-gigs2.page.html',
  styleUrls: ['./manage-gigs2.page.scss'],
})
export class ManageGigs2Page implements OnInit {

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
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public actionSheetController: ActionSheetController,
    private gigService: GigService 
    ) {}

    openEventDetails(inforEvent: any){
      console.log('inforEvent data:', inforEvent); // Add this line to verify the data
      this.modalController.create({
        component: GigHistoryPage,
        componentProps: { 
          eventData: inforEvent, 
        },
      }).then((modalElement) => {
        modalElement.present();
      });
    }


    deleteEvent(event: any) {
      // Implement the logic to delete the selected event
      // For example, you can use AngularFirestore to delete the event from the database.
    }

  ngOnInit() {
    this.afAuth.authState.subscribe((user: FirebaseUser | null) => {
      if (user) {
        const uid = user.uid;
        console.log('User UID:', uid);
        
        // Query Firestore for user information based on UID field
        this.firestore.collection('users', ref => ref.where('uid', '==', uid)).valueChanges().subscribe((userData: any[]) => {
          if (userData.length > 0) {
            const currentUser = userData[0];
            console.log('User Data (users):', currentUser);
    
            // Check if the user has a 'StageName' field
            if ('StageName' in currentUser) {
              const userStageName: string = currentUser.StageName;
              console.log('User StageName:', userStageName);
    
              // Query Firestore to filter events based on "selectedGuestText"
              this.firestore.collection('events').valueChanges().subscribe((data: any[]) => {
                  for ( const item of data ) {
                    console.log('Event item:', item);
                    if (item.selectedGuestsText && item.selectedGuestsText.includes(userStageName)) {
                      console.log('Event:', item);
                    }
                    const filteredEvents = data.filter((item) => {
                      return item.selectedGuestsText && item.selectedGuestsText.includes(userStageName);
                    });
                    filteredEvents.sort((a, b) => {
                      const nameA = a.title?.toUpperCase() || '';
                      const nameB = b.title?.toUpperCase() || '';
                      return nameA.localeCompare(nameB);
                    });
                    this.events = filteredEvents;
                    this.filterEvents();
                    this.gigService.updateGigCount(this.filteredEvents.length);
                    
                  }
              });
            } else {
              console.log('User does not have a StageName.');
            }
          } else {
            console.log('User data not found in Firestore.');
          }
        });
      } else {
        console.log('User is not authenticated.');
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
    this.gigService.updateGigCount(this.filteredEvents.length);
  }

  navigateToHome(){
    this.router.navigate(['/home-event-guest'])
  }
}