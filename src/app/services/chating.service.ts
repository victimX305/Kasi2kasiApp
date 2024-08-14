
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, of, switchMap, forkJoin, Subject, combineLatest, from } from 'rxjs';
import { ApiService, Message } from './api.service';
import { first, startWith, take, tap } from 'rxjs/operators';
import {  catchError, finalize } from 'rxjs/operators';
import { User, getAuth } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { QuerySnapshot, Timestamp } from 'firebase/firestore';
import { Chatroom, Wallpaper } from '../Models/chat';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationExtras, Router } from '@angular/router';
import {  CollectionReference, Query } from '@angular/fire/compat/firestore';
//import * as firebase from 'firebase/compat';
import firebase from 'firebase/compat/app'; // Import firebase app
import { DocumentSnapshot } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ChatingService {
 // chatRooms$: Observable<any[]> = this.chatRooms.asObservable();
 // auth: any;
  currentUserId: string;
  currentUser: any;
  public users: Observable<any>;
  public chatRooms: Observable<any>;
  public Guests: Observable<any>;
  public EventOrganizers: Observable<any>;
  public selectedChatRoomMessages: Observable<any>;
  rooms: any;
  organizerUid: string;
  private messageSentSubject = new Subject<void>();
  private messageReceivedSubject = new Subject<void>();
  //private currentUserId: string; // Assuming you have this property declared
  chatRooms$: Observable<any[]>;
  //private currentUserId: string;  Assuming you have this property declared
  private unreadMessagesMap: Map<string, number> = new Map<string, number>();
  isLoading: boolean = false;
message: string = '';
private content: IonContent;


  constructor(
    public auth: AuthService,
    private api: ApiService,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private afDatabase: AngularFireDatabase,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    private modalCtrl: ModalController,
    private storage: AngularFireStorage,
    
    
  ) { 
    // this.getChatRooms();
    //this.getId();
  }
  async getIda() {
    const auth = getAuth();
    this.currentUser = auth.currentUser;
    console.log(this.currentUser);
    await this.currentUser?.getIdToken(); // Ensure user data is fully loaded
    return this.currentUser?.uid;
  }
  
  getId() {
   this.currentUserId = this.auth.getId();
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>('your-api-endpoint').pipe(
      map(response => {
        // Your mapping logic here if needed
        return response;
      })
    );
  }

  
  
  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }
  
    // Get guests
    getGuests() {
    this.Guests = this.api.collectionDataQuery(
      'Guests', 
      this.api.whereQuery('uid', '!=', this.currentUserId)
    );
    }
  
    // Get event organizers
    getEventOrganizers() {
    this.EventOrganizers = this.api.collectionDataQuery(
      'EventOrganizers', 
      this.api.whereQuery('uid', '!=', this.currentUserId)
    );
  }
  
  async createChatRoom(user_id)
  {
    try{
      let room: any;
      const querySnapshot = await this.api.getDocs(
        'chatRooms',
        this.api.whereQuery(
          'members',
        'in',
        [[user_id, this.currentUserId], [this.currentUserId, user_id]]
      )
      );
      room = await querySnapshot.docs.map((doc: any) => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      });
      console.log('exist docs: ', room);
      if(room?.length > 0) return room[0];
      const data = {
        members: [
          this.currentUserId,
          user_id
        ],
        type: 'public',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      room = await this.api.addDocument('chatRooms', data);
      return room;
    }
    catch(e)
    {
      throw(e);
    }
  }

  getChatRooms() {
    try {
      this.getId();
      console.log(this.currentUserId);

      this.chatRooms = forkJoin(
        this.messageSentSubject.asObservable(),
        this.messageReceivedSubject.asObservable(),
      ).pipe(
        startWith(void 0), // Ensure chat rooms are fetched initially
        switchMap(() =>
          this.api.collectionDataQuery(
            'chatRooms',
            this.api.whereQuery('members', 'array-contains', this.currentUserId)
          ).pipe(
            switchMap((chatRooms: any[]) => {
              console.log('Chat rooms: ', chatRooms);

              // Fetch user and last message details for each chat room
              return forkJoin(
                chatRooms.map(async (chatRoom) => {
                  const user_data = chatRoom.members.filter(x => x !== this.currentUserId);
                  console.log('Other user IDs: ', user_data);

                  // Fetch user data
                  try {
                    const user = await this.api.docDataQuery(`users/${user_data[0]}`, true);
                    chatRoom.user = user;
                  } catch (error) {
                    console.error('Error fetching user data:', error);
                  }

                  // Fetch the last message from the messages sub-collection
                  try {
                    const lastMessageQuery = this.api.collectionDataQuery(
                      `chats/${chatRoom.id}/messages`,
                      this.api.orderByQuery('createdAt', 'desc')
                    ).pipe(
                      take(1), // Limit to one result
                      map(messages => messages[0] || null)
                    ).toPromise();

                    const lastMessage = await lastMessageQuery;
                    if (lastMessage) {
                      chatRoom.lastMessageTimestamp = lastMessage.createdAt.toMillis();
                    } else {
                      chatRoom.lastMessageTimestamp = 0; // Default value if no messages are found
                    }
                  } catch (error) {
                    console.error('Error fetching last message:', error);
                    chatRoom.lastMessageTimestamp = 0; // Default value in case of error
                  }

                  // Use the most recent timestamp between updatedAt and lastMessageTimestamp
                  chatRoom.sortTimestamp = Math.max(
                    chatRoom.updatedAt.toMillis(),
                    chatRoom.lastMessageTimestamp
                  );

                  return chatRoom;
                })
              );
            }),
            map(chatRooms => {
              // Sort the chat rooms based on the most recent timestamp
              chatRooms.sort((a, b) => b.sortTimestamp - a.sortTimestamp);
              return chatRooms;
            })
          )
        )
      );
    } catch (error) {
      console.error('Error in getChatRooms:', error);
    }
  }

  // Method to increment unread message count for a chat room
  incrementUnreadCount(chatRoomId: string) {
    const unreadCount = this.unreadMessagesMap.get(chatRoomId) || 0;
    this.unreadMessagesMap.set(chatRoomId, unreadCount + 1);
    this.messageReceivedSubject.next();
  }

  // Method to reset unread message count for a chat room
  resetUnreadCount(chatRoomId: string) {
    this.unreadMessagesMap.set(chatRoomId, 0);
    this.messageReceivedSubject.next();
  }

  // Example method to simulate receiving a message
  receiveMessage(chatRoomId: string, message: string) {
    this.incrementUnreadCount(chatRoomId);
  }

  // Example method to simulate reading messages in a chat room
  readMessages(chatRoomId: string) {
    this.resetUnreadCount(chatRoomId);
  }
  

  getChatRoomMessages(chatRoomId)
  {
    this.selectedChatRoomMessages = this.api.collectionDataQuery(
      `chats/${chatRoomId}/messages`,
    
      this.api.orderByQuery('createdAt', 'desc')
    )
    .pipe(map((arr: any) => arr.reverse()));
  }

  getMessages(chatId: string): Observable<any[]> {
    return this.afs.collection(`chats/${chatId}/messages`, ref => ref.orderBy('createdAt')).valueChanges();
}
  

async sendMessage(chatId: string, msg: string, type: 'text' | 'image' = 'text') {
  try {
    if (!this.currentUserId) {
      const user = await this.afAuth.authState.pipe(first()).toPromise();
      if (!user) {
        console.error('User is not authenticated.');
        return;
      }
      this.currentUserId = user.uid;
    }

    const new_message = {
      message: msg,
      type: type,
      sender: this.currentUserId,
      createdAt: new Date(),
      unreadCount: 1
    };

    if (chatId) {
      await this.firestore.collection(`chats/${chatId}/messages`).add(new_message);
      this.arrangeChatRoomsOnTop();
      // Update unread count for the recipient
      await this.updateUnreadCount(chatId, this.currentUserId);
    }

    console.log('Message sent successfully');
    this.notifyMessageSent();

    this.message = '';
    this.isLoading = false;
  } catch (e) {
    console.log('Error sending message', e);
    throw e;
  }
}





  


notifyMessageSent() {
  this.messageSentSubject.next();
}

notifyMessageReceived() {
  this.messageReceivedSubject.next();
}

async updateUnreadCount(chatId, senderId) {
  try {
      const chatRef = this.firestore.collection('chats').doc(chatId);
      const chatDoc: Observable<DocumentSnapshot<any>> = chatRef.get() as Observable<DocumentSnapshot<any>>;

      chatDoc.subscribe(doc => {
          if (doc.exists) {
              const data = doc.data();
              const unreadCountPath = `unreadCount.${senderId}`;

              // Update unreadCount for the sender's side
              chatRef.update({
                  [unreadCountPath]: firebase.firestore.FieldValue.increment(1)
              });
          } else {
              console.warn(`Chat document with ID ${chatId} does not exist.`);
          }
      });
  } catch (error) {
      console.error('Error updating unread count:', error);
  }
}




  arrangeChatRoomsOnTop() {
    this.chatRooms.subscribe(chatRooms => {
      if (chatRooms) {
        chatRooms.sort((a, b) => {
          // Check if lastMessage is defined for both chat rooms
          if (a.lastMessage && b.lastMessage) {
            const timestampA = a.lastMessage.timestamp || 0; // Default to 0 if timestamp is undefined
            const timestampB = b.lastMessage.timestamp || 0; // Default to 0 if timestamp is undefined
            return timestampB - timestampA; // Descending order
          } else if (a.lastMessage) {
            // Handle case where lastMessage is defined for a but not for b
            return -1; // Place a before b
          } else if (b.lastMessage) {
            // Handle case where lastMessage is defined for b but not for a
            return 1; // Place b before a
          } else {
            // Handle case where lastMessage is undefined for both a and b
            return 0; // Keep the order unchanged
          }
        });
      }
    });
  }
  
  
  
  

 // Method to check if new messages are received for a room
   // Method to check for new messages
   // Method to retrieve the last message for each chat room
   // Method to retrieve the last message for each chat room
    // Method to retrieve the last message for each chat room
     // Method to retrieve the last message for each chat room
 
  getMessage(room: any): Observable<string> {
    // Check if room object has messages subcollection
    if (room && room.id) {
      // Reference to the messages subcollection for the current chat room
      const messagesRef = this.api.collectionDataQuery(`chats/${room.id}/messages`, 
          ref => ref.orderBy('createdAt', 'desc').limit(1)
      );
  
      // Return the observable directly
      return messagesRef.pipe(
        map(messages => {
          if (messages && messages.length > 0) {
            // If messages exist, extract the message content
            const latestMessage = messages[0];
            return latestMessage?.data()?.message || "No messages"; // If message exists, return it, otherwise return "No messages"
          } else {
            // If no messages exist, return a placeholder message
            return "No messages"; // Placeholder message
          }
        })
      );
    } else {
      // If room is not provided, return an Observable of "No messages"
      return of("No messages"); // Return "No messages" as Observable
    }
  }
  getChatroomByEmail(userEmail: string): Observable<Chatroom | undefined> {
    return this.getUserByEmail(userEmail).pipe(
      switchMap(user => {
        console.log('User:', user); // Log user object
        
        if (user && user.uid) { // Check if user and user.uid are defined
          console.log('User UID:', user.uid); // Log user UID
          
          // Assuming user.uid corresponds to the unique identifier in Firestore
          return this.firestore.collection<Chatroom>('chatRooms', ref =>
            ref.where('members', 'array-contains', user.uid)
          ).valueChanges({ idField: 'id' }).pipe(
            map(chatrooms => chatrooms[0]) // Assuming a user can be in only one chatroom for simplicity
          );
        } else {
          // If user is not found or user.uid is undefined, return undefined
          return of(undefined);
        }
      })
    );
  }
  
  

  getUserByEmail(email: string): Observable<User | undefined> {
    if (!email) {
      console.error('Email parameter is undefined');
      return of(undefined);
    }
  
    return this.firestore.collection<User>('users', ref =>
      ref.where('email', '==', email).limit(1)
    ).valueChanges({ idField: 'id' }).pipe(
      map(users => users[0]), // Assuming there is at most one user with the given email
      catchError(error => {
        console.error(`Error fetching user by email ${email}:`, error);
        return of(undefined); // Return undefined in case of an error
      })
    );
  }
  

  

  

  async checkChatroomExists(uid: string): Promise<boolean> {
    const snapshot = await this.firestore.collection('chatrooms').doc(uid).get().toPromise();
    return snapshot.exists;
  }
  

  async navigateToChatroom(email: string) {
  try {
    const uid = await this.getUIDFromEmail(email);
    const chatroomExists = await this.checkChatroomExists(uid);
    
    if (chatroomExists) {
      this.router.navigate(['/chats', uid]);
    } else {
      // Create new chatroom
      await this.createChatRoom(uid); // Assuming createChatroom method creates a chatroom document
      this.router.navigate(['/chats', uid]);
    }
  } catch (error) {
    console.error('Error navigating to chat:', error);
  }
}

async getUIDFromEmail(email: string): Promise<string | null> {
  try {
    const snapshot = await this.firestore.collection('users', ref => ref.where('email', '==', email)).get().toPromise();
    if (!snapshot.empty) {
      return snapshot.docs[0].id;
    } else {
      console.error('User not found with email:', email);
      return null;
    }
  } catch (error) {
    console.error('Error fetching UID:', error);
    return null;
  }
}
 // Method to open chat room for a given event organizer
 async openChatWithOrganizer(eventOrganizerUid: string): Promise<void> {
  try {
    // Get the current user ID
    const currentUserId = await this.getCurrentUserId();

    if (!currentUserId) {
      console.error('Current user UID is not available.');
      return;
    }

    if (!eventOrganizerUid) {
      console.error('Event organizer UID is not available.');
      return;
    }

    const organizerRef = this.afs.collection('users').doc(eventOrganizerUid);
    const organizerDoc = await organizerRef.get().toPromise();
    if (!organizerDoc.exists) {
      console.error('Organizer document not found.');
      return;
    }

    const organizerData: { fullname?: string } = organizerDoc.data();
    if (!organizerData || !organizerData.fullname) {
      console.error('Organizer full name not available.');
      return;
    }

    const organizerFullName = organizerData.fullname;

    const existingChatRoom = await this.getExistingChatRoom(currentUserId, eventOrganizerUid);

    if (existingChatRoom) {
      console.log('Chat room found:', existingChatRoom);
      this.getChat({
        id: existingChatRoom.id,
        fullname: organizerFullName
      });
    } else {
      console.log('No chat room found. Creating a new one.');
      const newChatRoom = await this.creatingChatRoom(currentUserId, eventOrganizerUid);
      if (newChatRoom) {
        console.log('New chat room created:', newChatRoom);
        this.getChat({
          id: newChatRoom.id,
          fullname: organizerFullName
        });
      } else {
        console.error('Error creating new chat room.');
      }
    }

    this.cancel();
  } catch (error) {
    console.error('Error opening chat with organizer:', error);
  }
}






private async getExistingChatRoom(currentUserId: string, eventOrganizerUid: string) {
  try {
    const querySnapshot = await this.afs.collection<any>('chatRooms', ref =>
      ref.where('participants', 'array-contains', currentUserId)
    ).get().toPromise();

    const existingChatRoom = querySnapshot.docs.find(doc => {
      const participants: string[] = doc.data().participants;
      return participants.includes(eventOrganizerUid);
    });

    if (existingChatRoom) {
      return { id: existingChatRoom.id, ...existingChatRoom.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting existing chat room:', error);
    return null;
  }
}



getChat(data: { id: string, fullname: string }): void {
  const navData: NavigationExtras = {
    queryParams: {
      fullname: data.fullname
    }
  };
  this.router.navigate(['/', 'chats', 'chating', data.id], navData);
}
cancel() {
  return this.modalCtrl.dismiss();
}

async getCurrentUserId(): Promise<string | null> {
  const user = await this.afAuth.authState.pipe(first()).toPromise();
  if (user) {
      console.log(`Authenticated user ID: ${user.uid}`);
  } else {
      console.error('User not authenticated');
  }
  return user ? user.uid : null;
}


private async createsChatRoom(currentUserId: string, eventOrganizerUid: string) {
  try {
    const newChatRoom = await this.afs.collection('chatRooms').add({
      participants: [currentUserId, eventOrganizerUid],
      createdAt: new Date()
    });

    const newChatRoomData = (await newChatRoom.get()).data();

    if (newChatRoomData) {
      return { id: newChatRoom.id, data: newChatRoomData };
    } else {
      return { id: newChatRoom.id, data: {} };
    }
  } catch (error) {
    console.error('Error creating chat room:', error);
    return null;
  }
}









async creatingChatRoom(organizerUid: string, currentUserId: string): Promise<any> {
  try {
    let room: any;
    const querySnapshot = await this.api.getDocs(
      'chatRooms',
      this.api.whereQuery(
        'members',
        'in',
        [[organizerUid, currentUserId], [currentUserId, organizerUid]]
      )
    );
    room = await querySnapshot.docs.map((doc: any) => {
      let item = doc.data();
      item.id = doc.id;
      return item;
    });
    console.log('exist docs: ', room);
    if (room?.length > 0) return room[0];
    const data = {
      members: [
        currentUserId,
        organizerUid
      ],
      type: 'public',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    room = await this.api.addDocument('chatRooms', data);
    return room;
  } catch(e) {
    throw(e);
  }
  
}
getLoggedInUser(): Observable<any> {
  return this.afAuth.authState.pipe(
    map(user => {
      if (user) {
        return { uid: user.uid, email: user.email }; // Customize as per your user model
      } else {
        return null;
      }
    })
  );
}

setContent(content: IonContent) {
  this.content = content;
}
async getScrollElement() {
  if (!this.content) {
    throw new Error('Content not set');
  }
  return await this.content.getScrollElement();
}

  // Method to get user's wallpaper
  getUserWallpaper(userId: string): Observable<Wallpaper | undefined> {
    return this.firestore.collection('wallpapers').doc<Wallpaper>(userId).valueChanges();
  }

  // Method to set user's wallpaper
  setUserWallpaper(userId: string, wallpaperUrl: string): Promise<void> {
    return this.getUserWallpaper(userId).pipe(
      take(1),
      switchMap((wallpaper) => {
        if (wallpaper?.url) {
          // Delete the old wallpaper file from storage
          const oldFileRef = this.storage.refFromURL(wallpaper.url);
          return from(oldFileRef.delete()).pipe(
            switchMap(() => this.firestore.collection('wallpapers').doc(userId).set({ url: wallpaperUrl }, { merge: true }))
          );
        } else {
          return from(this.firestore.collection('wallpapers').doc(userId).set({ url: wallpaperUrl }, { merge: true }));
        }
      })
    ).toPromise();
  }
  uploadImage(file: File): Promise<string> {
    const filePath = `images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    return from(this.storage.upload(filePath, file))
      .pipe(
        switchMap(() => fileRef.getDownloadURL())
      )
      .toPromise();
  }
  

  }