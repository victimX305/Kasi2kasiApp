import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
//import { NavigationExtras, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Timestamp, collection, doc } from 'firebase/firestore';
import { Observable, concatMap, first, forkJoin, map, of, startWith, switchMap, take, tap } from 'rxjs';
import { Chat } from 'src/app/Models/chat';
import { ApiService, Message } from 'src/app/services/api.service';
import { ChatCountService } from 'src/app/services/chat-count.service';
//import { ChatService } from 'src/app/chat.service';
import { ChatingService } from 'src/app/services/chating.service';
import { ChatsService } from 'src/app/services/chats.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
/*interface Chat {
  message: string;
  sender: string;
  createdAt: Timestamp; // Update the type accordingly based on your Firestore data type for createdAt
}*/

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  //user: any;
@ViewChild('new_chat') modal: ModalController;
@ViewChild('popover') popover: PopoverController;
 authenticatedUserId = 'your_authenticated_user_id'; // Replace with actual authenticated user ID
 otherUserId = 'the_other_user_id'; // Replace with the ID of the other user you want to chat with


  segment = 'chats';
  open_new_chat = false;
  recipientUserId: string;
  users: Observable<any[]>;
  chatRooms: Observable<any[]>;
  //message: string;
  chats: Observable<any[]>;
  Guests:  Observable<any[]>;
  EventOrganizers: Observable<any[]>;
  user='Users';
  Guest='Guests';
  eventoorganizers='EventOrganisers';
  chatRooms$: Observable<any[]>;
  lastMessages: any[] = [];
  messages: any[] = [];
  newMessageCounts: { [roomId: string]: number } = {}; 
  lastMessageTimestamp = 0;
  model = {
    icon: 'chatbubbles-outline',
    title: 'No Chat Rooms',
    color: 'danger'
   };
   chatroomId: string;
   chatroomName = 'chatrooms';
   receivedMessages: Record<string, any[]> = {};
   filteredUsers: Observable<any[]>;
   guestsData: Observable<any[]>;
  newMessageCount: number = 0;
  private messageSubscription;
  //messageObservables: { [roomId: string]: Observable<string> } = {};
  currentUser: any; // Define currentUser property
  messageObservables: { [key: string]: Observable<any> } = {};
  rooms: any[] = []; 
  loggedInUserId: any;
  currentUserId: any; // Define currentUser property

  

  constructor(
    private router: Router,
    private chatingService: ChatingService,
    private route: ActivatedRoute,
    private messageService: MessageServiceService,
    private chatsService: ChatsService,
    private firestore: AngularFirestore,
    private modalController: ModalController,
    private chatCountService: ChatCountService,
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private api: ApiService,
    private afAuth: AngularFireAuth,
    private auth: AngularFireAuth
    
  ) {
    this.chatingService.getLoggedInUser().subscribe(user => {
      if (user) {
        this.loggedInUserId = user.uid; // Assuming `uid` is the unique identifier
        this.users = this.chatingService.getUsers();
        this.filterUsers(); // Apply initial filter based on the default segment
      }
    });
    
     }
     
  newMessageCounter: number = 0;
  searchTerm: string = '';
  noMatchFound: boolean = false;
  eventOrganizersData: Observable<any[]>;
  usersData: Observable<any[]>;

  
   
  async ngOnInit() {
    this.getRooms();
    this.fetchMessages().subscribe(() => {
      // Any additional logic after messages are fetched
    });
    //this.chatRooms$ = this.yChatService.getChatRooms();
    this.chatRooms$ = this.firestore.collection('chatRooms').valueChanges();
     // Get the current user
     try {
      const user = await this.afAuth.authState.pipe(first()).toPromise();
      if (!user || !user.uid) {
        console.error('Current user not found.');
        return;
      }
      this.currentUser = user; // Assign user to currentUser property

      // Get all users
      const users: Observable<any[]> = this.afs.collection('users').valueChanges();

      // Filter users to exclude the current user
      this.filteredUsers = users.pipe(
        map(users => {
          // Ensure users is an array
          if (!Array.isArray(users)) {
            console.error('Users data is not an array.');
            return [];
          }

          // Filter out the current user
          return users.filter(user => user.uid !== this.currentUser.uid);
        }),
        startWith(null) // Ensure the filter runs immediately even when no changes happen in the search bar
      );
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
    this.rooms.forEach(room => {
      this.messageObservables[room.id] = this.firestore.doc(`chats/${room.id}`).valueChanges();
  });
  this.afAuth.authState.subscribe(user => {
    if (user) {
      this.currentUserId = user.uid;
      console.log('Current User ID:', this.currentUserId);
    }
  });

  

    }
    
   /* addChatMessage(chatId: string, message: string): Observable<any>
    {
      const ref = collection(this.firestore, 'chats', chatId, 'messages');
      const chatRef = doc(this.firestore, 'chats', chatId);
      const today = Timestamp.fromDate(new Date());
      return this.usersService.currentUserprofiles$.pipe(
        take(1),
        concatMap((user) => addDoc(ref, {
          text: message,
          senderId: user?.uid,
          sentdate: today
        })),
        concatMap(() => updateDoc(chatRef, {lastMessage: message, lastMessagedate: today})
        )
      );
    }*/
    

    filterUsers(event?: any): void {
      // Ensure event.target.value is defined if event is provided
      const searchTerm: string = event ? (event.target.value || '').trim().toLowerCase() : '';
  
      // Ensure users is defined and not null
      if (!this.users) {
        console.error('Users data is undefined.');
        return;
      }
  
      this.filteredUsers = this.users.pipe(
        map(users => {
          // Ensure users is an array and contains objects with a fullname and registrationType property
          if (!Array.isArray(users)) {
            console.error('Users data is not an array.');
            return [];
          }
          return users.filter(user => {
            // Ensure user fullname is a string and user has a registrationType
            if (typeof user.fullname !== 'string' || typeof user.registrationType !== 'string') {
              console.error('User data is invalid.');
              return false;
            }
  
            // Exclude logged-in user
            if (user.uid === this.loggedInUserId) {
              return false;
            }
  
            // Check if fullname contains search term and match registrationType based on the selected segment
            if (this.segment === 'eventOrganizers') {
              return user.fullname.toLowerCase().includes(searchTerm) && user.registrationType === 'partner';
            } else if (this.segment === 'guests') {
              return user.fullname.toLowerCase().includes(searchTerm) && user.registrationType === 'GuestEvent';
            }
            return false;
          });
        }),
        startWith([]) // Ensure the filter runs immediately even when no changes happen in the search bar
      );
    }

  clearSearch(): void {
    this.searchTerm = '';
    this.filterUsers({ target: { value: '' } }); // Reset filter
  }


  
 
  
  getRooms()
  {
    this.chatingService.getChatRooms();
    this.chatRooms = this.chatingService.chatRooms;
    console.log('chatrooms: ', this.chatRooms);
  }
  async logout()
  {
    try{
      console.log('logout');
      this.popover.dismiss();
      await this.chatingService.auth.logout();
      this.router.navigateByUrl("/login2", {replaceUrl: true});
    }
    catch(e){
      console.log(e);
    }

  }

  onSegmentsChanged(event: any) {
    this.segment = event.detail.value;
    this.filterUsers(); // Filter users based on the selected segment
  }
  onSegmentsChange(event: any)
  {
    console.log(event);
    this.segment = event.detail.value;
  }

  newChat() {
    this.open_new_chat = true;
    if (!this.users) {
      this.getUsers();
    }
    if (!this.Guests) {
      this.getGuests();
    }
    if (!this.EventOrganizers) {
      this.getEventOrganizers();
    }
  }

  
  

  getUsers()
  {
    this.chatingService.getUsers();
    this.users = this.chatingService.users;
  }
  getGuests()
  {
    this.chatingService.getGuests();
    this.Guests = this.chatingService.Guests;
  }
  getEventOrganizers()
  {
    this.chatingService.getEventOrganizers();
    this.EventOrganizers = this.chatingService.EventOrganizers;
  }

onWillDismiss(event: any)
{

}


cancel()
{
  this.modal.dismiss();
  this.open_new_chat = false;
}

async startChat(item)
{
  try{
   // this.global.showLoader();
    const room = await this.chatingService.createChatRoom(item?.uid);
    console.log('room: ', room);
    this.cancel();
    const navData: NavigationExtras = {
      queryParams: {
        fullname: item?.fullname
      }
    };
    this.router.navigate(['/', 'chats', 'chating', room?.id], navData);
   // this.global.hideLoader();
  }
  catch(e)
  {
    console.log(e);
   // this.global.hideLoader();
  }
}
async getIda() {
  const auth = getAuth();
  this.currentUser = auth.currentUser;
  console.log(this.currentUser);
  await this.currentUser?.getIdToken(); // Ensure user data is fully loaded
  return this.currentUser?.uid;
}


getChat(item) {
  (item?.user).pipe(
    take(1)
  ).subscribe(async user_data => {
    const navData: NavigationExtras = {
      queryParams: {
        fullname: user_data?.fullname
      }
    };

    try {
      const user = await this.afAuth.authState.pipe(first()).toPromise();
      if (!user) {
        console.error('User is not authenticated.');
        return;
      }
      this.currentUserId = user.uid; // Fetch and store the user's ID

      // Check if the last message's sender ID matches the logged-in user's ID
      const lastMessageRef = this.firestore.collection(`chats/${item.id}/messages`, ref => ref.orderBy('createdAt', 'desc').limit(1));
      const snapshot = await lastMessageRef.get().toPromise();

      if (!snapshot.empty) {
        const lastMessage = snapshot.docs[0].data() as any; // Adjust 'as any' to match your Message type
        console.log('Last message:', lastMessage); // Log last message for debugging
        if (lastMessage.sender === this.currentUserId) {
          console.log('Last message sender is current user. Skipping unread count reset.');
        } else {
          await this.resetUnreadCount(item.id); // Ensure resetUnreadCount is awaited
        }
      } else {
        console.log('No messages found in chat. Skipping unread count reset.');
      }
    } catch (error) {
      console.error('Error fetching last message or navigating:', error);
    }

    this.router.navigate(['/', 'chats', 'chating', item?.id], navData);
  });
}

async resetUnreadCount(chatId: string) {
  try {
    const messagesRef = this.firestore.collection(`chats/${chatId}/messages`);
    const snapshot = await messagesRef.ref.where('unreadCount', '>', 0).get();
    snapshot.forEach(doc => {
      const message = doc.data() as any; // Adjust 'as any' to match your Message type
      if (message.unreadCount > 0 && message.sender !== this.currentUserId) {
        doc.ref.update({ unreadCount: 0 }).catch(error => console.error('Error updating unread count:', error));
      }
    });
  } catch (error) {
    console.error('Error fetching unread messages:', error);
  }
}


getUser(user: any)
{
  return user;
}
//messageObservables: { [roomId: string]: Observable<{ message: string; time: string; }> } = {};
unreadCountObservables: { [roomId: string]: Observable<number> } = {};

fetchMessages() {
  // Assuming this.chatRooms is an Observable of chat rooms
  return this.chatRooms.pipe(
    tap(rooms => {
      rooms.forEach(room => {
        this.messageObservables[room.id] = this.getMessage(room);
      });

      // Log the populated messageObservables object
      console.log('Message Observables:', this.messageObservables);
    }),
    // Map to void to indicate completion
    map(() => {})
  );
}


//messageObservables: { [roomId: string]: Observable<{ message: string; time: string; }> } = {};

getMessage(room: any): Observable<{ message: string; time: string; messageType: string, unreadCount: number }> {
  if (room && room.id && room.members && room.members.includes(this.currentUserId)) {
    const messagesRef = this.firestore.collection(`chats/${room.id}/messages`, 
      ref => ref.orderBy('createdAt', 'desc')
    );

    return messagesRef.snapshotChanges().pipe(
      map(actions => {
        let totalUnreadCount = 0;

        actions.forEach(action => {
          const messageData = action.payload.doc.data() as any;
          if (messageData.sender !== this.currentUserId) { // Check if the sender is not the current user
            totalUnreadCount += messageData.unreadCount || 0;
          }
        });

        if (actions && actions.length > 0) {
          const latestMessage = actions[0].payload.doc.data() as any;
          if (latestMessage && latestMessage.message) {
            const messageTime = new Date(latestMessage.createdAt.seconds * 1000);
            const formattedTime = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            return { 
              message: latestMessage.message, 
              time: formattedTime, 
              messageType: latestMessage.type,
              unreadCount: totalUnreadCount
            };
          } else {
            return { message: "Error: Missing or invalid message data.", time: "", messageType: "", unreadCount: 0 };
          }
        } else {
          return { message: "", time: "", messageType: "", unreadCount: 0 };
        }
      })
    );
  } else {
    return of({ message: "No messages", time: "", messageType: "", unreadCount: 0 });
  }
}






async openModal() {
  const modal = await this.modalController.create({
    component: ChatsPage,
  });
}
updateLastMessages(newMessages: any[]) {
  // Merge new messages with existing messages
  newMessages.forEach(newMessage => {
    const existingMessageIndex = this.lastMessages.findIndex(message => message.chatId === newMessage.chatId);
    if (existingMessageIndex !== -1) {
      this.lastMessages[existingMessageIndex] = newMessage;
    } else {
      this.lastMessages.push(newMessage);
    }
  });
}

getLastMessage(chatId: string): Observable<any> {
  return this.afs.collection(`chats/${chatId}/message`, ref =>
    ref.orderBy('createdAt', 'desc').limit(1)
  ).valueChanges();
}

async deleteChatRoom(roomId: string) {
  try {
    const currentUser = await this.auth.currentUser;
    if (!currentUser) {
      console.error('No user logged in.');
      return;
    }

    // Get the chatroom document
    const roomSnapshot = await this.firestore.collection('chatRooms').doc(roomId).get().toPromise();
    const roomData = roomSnapshot.data() as { ownerId: string, members: string[], type: string };
    if (!roomData) {
      console.error('Chat room not found.');
      return;
    }

    // Check if the logged-in user has permission to delete the chatroom
    const ownerId = roomData.ownerId;
    console.log('Owner ID:', ownerId);
    console.log('Current user ID:', currentUser.uid);

    const members = roomData.members || [];
    const type = roomData.type;

    if (type === 'private' && currentUser.uid !== ownerId) {
      console.error('Only the owner can delete this private chat room.');
      return;
    } else if (type !== 'private' && !members.includes(currentUser.uid)) {
      console.error('You are not a member of this chat room.');
      return;
    }

    // Delete the chatroom from Firestore
    await this.firestore.collection('chatRooms').doc(roomId).delete();
    console.log('Chat room deleted:', roomId);

    // Update the local array by removing the deleted chatroom
    this.rooms = this.rooms.filter(room => room.id !== roomId);
    console.log('Chat room removed from local array. Remaining rooms:', this.rooms.length);
  } catch (error) {
    console.error('Error deleting chat room:', error);
    // Optionally, you could display an error message to the user
    // or handle the error in another way.
  }
}
openSettings() {
  this.router.navigate(['/background-settings']);
}
async handlePopoverClick(action: string) {
  await this.popover.dismiss();
  if (action === 'chat') {
    this.openSettings();
  } else if (action === 'logout') {
    this.logout();
  }
}




}