import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { PosterPagePage } from '../poster-page/poster-page.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { EventService } from '../eventService/eventService';

interface EventData {
  city: any;
  municipality: any;
  suburb: any;
  district: any;
  province: any;
  ward: any;
  id: string;
  title: string;
  startDate: string;
  startTime?: string;
  posterUrl?: string;
  eventType?: string;
  selected: boolean;
}



@Component({
  selector: 'app-event-org-home',
  templateUrl: './event-org-home.page.html',
  styleUrls: ['./event-org-home.page.scss'],
})
export class EventOrgHomePage implements OnInit {
  @ViewChild('content', { static: false }) content: IonContent;


  users: any;
  eventCount: number = 0;
  events: EventData[] = [];
  EventOrganizers: any[] = [];
  selectedProvince: string = '';
  user: any;
  currentPage: number = 1;
  pageSize: number = 10;
  selectedCategory: string = '';
  searchText: string = '';
  filteredEvents: any [] = [];
  showNoMatchesMessage: boolean = false;
  lastVisibleEvent: any = null;
  totalUnreadMessages: number = 0;
  totalUnreadMessages$: Observable<number>;
  displayUnreadMessagesCount: string = '0';
  private unreadMessagesCountSubject = new BehaviorSubject<number>(0);
  unreadMessagesCount$: Observable<number> = this.unreadMessagesCountSubject.asObservable();
  private unreadMessagesCountSubscription: Subscription;
  unreadMessagesCount: number = 0;

  private eventsCollection: AngularFirestoreCollection<any>;
  private eventPages: { [page: number]: EventData[] } = {};
  private eventsSubject = new BehaviorSubject<EventData[]>([]);
  events$: Observable<EventData[]> = this.eventsSubject.asObservable();
  internetStatus: boolean = false;

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isObjectWithNames(value: any): boolean {
    return value !== null && typeof value === 'object' && value.hasOwnProperty('names');
}


  constructor(
    private modalController: ModalController,
    private router: Router,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private eventService: EventService
  ) {
    this.eventsCollection = this.firestore.collection('events');

    this.afAuth.authState.subscribe(users => {
      if (users) {
        const uid = users.uid;
        console.log('User UID:', uid);
        
        // Query Firestore for user information based on UID fieald
        this.firestore.collection('users', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(userData => {
          if (userData.length > 0) {
            this.user = userData[0];
            console.log('User Data (users):', userData[0]);
          } else {
            this.firestore.collection('EventOrganizers', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(eventOrganizerData => {
              if (eventOrganizerData.length > 0) {
                this.user = eventOrganizerData[0];
                console.log('User Data (EventOrganizers):', eventOrganizerData[0]);
              } else {
                this.firestore.collection('Guests', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(guestData => {
                  if (guestData.length > 0) {
                    this.user = guestData[0];
                    console.log('User Data (Guests):', guestData[0]);
                  } else {
                    this.firestore.collection('GueastEventorg', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(gueastEventorgData => {
                      if (gueastEventorgData.length > 0) {
                        this.user = gueastEventorgData[0];
                        console.log('User Data (GueastEventorg):', gueastEventorgData[0]);
                      } else {
                        console.log('User data not found in any collection.');
                      }
                    })
                  }
                })
              }
            })
          }
        })
      } else {
        console.log('User not authenticated.');
      }
    });
  
  }

  ngOnInit() {
    // Fetch events data from Firestore
    this.fetchEventCount();
    this.checkInternetStatus();
    this.loadEvents();
    this.eventService.deletePastEvents();
    this.filterEvents();
    this.showNoMatchesMessage = false;
   // this.navigateBackward();
   // this.totalUnreadMessages$ = this.chatsPage.totalUnreadMessages$;
   this.getTotalUnreadMessages().then(count => {
    this.unreadMessagesCount = count;
    this.updateDisplayCount(count);
  }).catch(error => {
    console.error('Error fetching unread messages count:', error);
  });

  // Subscribe to real-time updates
  this.subscribeToUnreadMessages();
  this.unreadMessagesCountSubscription = this.unreadMessagesCount$
    .subscribe(count => {
      this.unreadMessagesCount = count;
      this.updateDisplayCount(count);
    });

  }

  OpenModal(event: any) {
    this.modalController.create({
      component: PosterPagePage,
      componentProps: {
        eventData: event,
      },
    }).then((modalElement) => {
      modalElement.present();
    });
  }

  ionViewDidEnter() {
    this.loadEvents();
  }

  filterEvents() {
    if (this.searchText.trim() !== '') {
        const searchText = this.searchText.toLowerCase().trim();    
        // Filter the events list if there's text in the search bar
        this.filteredEvents = this.events.filter(event =>
            (typeof event.title === 'string' && event.title.toLowerCase().includes(searchText)) ||
            (typeof event.city === 'string' && event.city.toLowerCase().includes(searchText)) ||
            (typeof event.municipality === 'string' && event.municipality.toLowerCase().includes(searchText)) ||
            (typeof event.suburb === 'string' && event.suburb.toLowerCase().includes(searchText)) ||
            (typeof event.district === 'string' && event.district.toLowerCase().includes(searchText)) ||
            (typeof event.province === 'string' && event.province.toLowerCase().includes(searchText)) ||
            (typeof event.ward === 'string' && event.ward.toLowerCase().includes(searchText)) ||
            (event.city && typeof event.city.names === 'string' && event.city.names.toLowerCase().includes(searchText)) ||
            (event.municipality && typeof event.municipality.name === 'string' && event.municipality.name.toLowerCase().includes(searchText)) ||
            (event.suburb && typeof event.suburb.name === 'string' && event.suburb.name.toLowerCase().includes(searchText)) ||
            (event.district && typeof event.district.name === 'string' && event.district.name.toLowerCase().includes(searchText)) ||
            (event.province && typeof event.province.name === 'string' && event.province.name.toLowerCase().includes(searchText)) ||
            (event.ward && typeof event.ward.name === 'string' && event.ward.name.toLowerCase().includes(searchText))
        );
    } else {
        // If searchText is empty, show all events
        this.filteredEvents = [...this.events];
    }

    // Show no matches message if no events match the search
    this.showNoMatchesMessage = this.filteredEvents.length === 0; 
}

  

  fetchEventCount() {
    this.eventsCollection.get().subscribe(querySnapshot => {
      this.eventCount = querySnapshot.size;
    });
  }

  loadEvents() {
    if (this.eventPages[this.currentPage]) {
      // Use cached events if available
      this.events = this.eventPages[this.currentPage];
      console.log(`Loaded cached events for page ${this.currentPage}:`, this.events);
      this.filterEvents();
    } else {
      // Fetch events from database
      let query = this.firestore.collection('events', ref => ref
        .orderBy('startDate')
        .limit(this.pageSize));
  
      if (this.lastVisibleEvent) {
        query = this.firestore.collection('events', ref => ref
          .orderBy('startDate')
          .startAfter(this.lastVisibleEvent)
          .limit(this.pageSize));
      }
  
      query.get().subscribe((querySnapshot: any) => {
        const eventsData = querySnapshot.docs
          .filter((doc: any) => doc.data().title) // Filter out objects with undefined title
          .map((doc: any) => ({
            id: doc.id,
            ...doc.data(),
            selected: false, // Initialize selected to false
          }))
          .sort((a: EventData, b: EventData) => {
            const dateA = new Date(`${a.startDate}T${a.startTime || '00:00'}`);
            const dateB = new Date(`${b.startDate}T${b.startTime || '00:00'}`);
            return dateA.getTime() - dateB.getTime();
          });
  
        // Cache the events for the current page
        this.eventPages[this.currentPage] = eventsData;
        console.log(`Loaded events from database for page ${this.currentPage}:`, eventsData);
  
        // Set events for the current page
        this.events = eventsData;
  
        // Update the last visible event
        this.lastVisibleEvent = querySnapshot.docs[querySnapshot.docs.length - 1];
  
        // Initial filtering
        this.filterEvents();
      }, (error: any) => {
        console.error('Error loading events:', error);
      });
    }
  }
  
  
  
  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(300);
    }
  }
  
  loadMore() {
    const remainingEvents = this.eventCount - this.currentPage * this.pageSize;
    if (remainingEvents > 0) {
      this.currentPage++;
      this.loadEvents();
      this.scrollToTop();
    }
  }
  
  navigateForward() {
    this.currentPage++;
    this.loadEvents();
    this.scrollToTop();
  }
  
  navigateBackward() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadEvents();
      this.scrollToTop();
    }
  }

  filterEventsByProvince() {
    console.log('Selected Province:', this.selectedProvince);

    if (this.selectedProvince && this.selectedProvince !== 'all') {
      // Refetch events from Firestore and filter by province
      this.firestore
        .collection('events', (ref) => ref.where('province', '==', this.selectedProvince))
        .valueChanges()
        .subscribe((data: any[]) => {
          this.filteredEvents = data;
          this.eventCount = this.filteredEvents.length;
        });
    } else {
      // If no province selected, fetch all events
      this.fetchEventCount();
      this.eventService.deletePastEvents();
      this.filterEvents();
      this.loadEvents();
    }
  }

  filterEventsByCategory() {

    console.log('Selected Category:', this.selectedCategory);

    if (this.selectedCategory && this.selectedCategory !== 'all') {
      // Refetch events from Firestore and filter by province
      this.firestore
        .collection('events', (ref) => ref.where('eventType', '==', this.selectedCategory))
        .valueChanges()
        .subscribe((data: any[]) => {
          this.filteredEvents = data;
          this.eventCount = this.filteredEvents.length;
        });
    } else {
      // If no province selected, fetch all events
      this.fetchEventCount();
      this.eventService.deletePastEvents();
      this.filterEvents();
      this.loadEvents();
    }
  }

  all()
  {
    this.firestore
    .collection('events')
    .valueChanges()
    .subscribe((data: any[]) => {
      this.filteredEvents = data;
      this.eventCount = this.filteredEvents.length;
    });
}
  

private getQuery() {
  let query = this.eventsCollection.ref.orderBy('startDate').limit(this.pageSize);

  if (this.currentPage > 1) {
    // Adjust query to start after the last event on the previous page
    const lastVisibleDoc = this.events[this.events.length - 1];
    query = query.startAfter(lastVisibleDoc.startDate);
  }

  return query;
}

  view() {
    console.log('Entered Profile page');
  }

  checkInternetStatus() {
    this.internetStatus = navigator.onLine;
    window.addEventListener('online', () => {
      this.internetStatus = true;
    });
    window.addEventListener('offline', () => {
      this.internetStatus = false;
    });
  }
  
  retry()
  {
    window.location.reload(); // Refresh the page when data is fetched
  }

  login(){
    this.router.navigate(['/login']);
    
  }
  getCurrentUserId(): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          resolve(user.uid);
        } else {
          reject('No user logged in');
        }
      });
    });
  }
   // Method to fetch total unread messages count
   async getTotalUnreadMessages(): Promise<number> {
    try {
      const currentUserId = await this.getCurrentUserId();
      if (!currentUserId) {
        throw new Error('No user logged in');
      }

      // Fetch chatrooms where the current user is a member
      const chatroomSnapshot = await this.firestore.collection('chatRooms', ref => ref.where('members', 'array-contains', currentUserId))
        .get().toPromise();

      const chatroomIds = chatroomSnapshot.docs.map(doc => doc.id);
      let totalUnreadCount = 0;

      // Fetch messages from each chatroom where unreadCount is 1 and the sender is not the current user
      const unreadMessagesPromises = chatroomIds.map(chatroomId => 
        this.firestore.collection(`chats/${chatroomId}/messages`, ref => ref.where('unreadCount', '==', 1).where('sender', '!=', currentUserId))
          .get().toPromise()
      );

      const messageSnapshots = await Promise.all(unreadMessagesPromises);
      messageSnapshots.forEach(snapshot => {
        totalUnreadCount += snapshot.docs.length;
      });

      return totalUnreadCount;

    } catch (error) {
      console.error('Error fetching unread messages count:', error);
      return 0;
    }
  }

  // Real-time listener for unread messages
  subscribeToUnreadMessages() {
    this.getCurrentUserId().then(currentUserId => {
      if (!currentUserId) {
        throw new Error('No user logged in');
      }

      this.firestore.collection('chatRooms', ref => ref.where('members', 'array-contains', currentUserId))
        .snapshotChanges().subscribe(chatroomSnapshots => {
          const chatroomIds = chatroomSnapshots.map(snapshot => snapshot.payload.doc.id);
          let totalUnreadCount = 0;

          // Create observables for each chatroom's unread messages
          const unreadMessagesObservables = chatroomIds.map(chatroomId => 
            this.firestore.collection(`chats/${chatroomId}/messages`, ref => ref.where('unreadCount', '==', 1).where('sender', '!=', currentUserId))
              .snapshotChanges()
          );

          // Merge all observables and calculate the total unread count
          combineLatest(unreadMessagesObservables).subscribe(results => {
            totalUnreadCount = results.reduce((sum, snapshot) => sum + snapshot.length, 0);
            this.unreadMessagesCountSubject.next(totalUnreadCount);
          });
        });
    }).catch(error => {
      console.error('Error subscribing to unread messages:', error);
    });
  }
  
  ngOnDestroy() {
    // Clean up subscription to avoid memory leaks
    if (this.unreadMessagesCountSubscription) {
      this.unreadMessagesCountSubscription.unsubscribe();
    }
  }

  private updateDisplayCount(count: number) {
    this.displayUnreadMessagesCount = count > 9 ? '9+' : count.toString();
  }
}

