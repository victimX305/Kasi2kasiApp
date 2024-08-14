import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, of, switchMap, forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import {  catchError, finalize } from 'rxjs/operators';
import { getAuth } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {

  currentUserId: string;
  currentUser: any;
  public users: Observable<any>;
  public chatRooms: Observable<any>;
  public Guests: Observable<any>;
  public EventOrganizers: Observable<any>;
  public selectedChatRoomMessages: Observable<any>;
  public guestChatRooms: Observable<any>;

  constructor(
    public auth: AuthService,
    private api: ApiService,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private afDatabase: AngularFireDatabase
  ) { 
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


  // guest-service.service.ts
  getGuestUserData(): any {
    // Implement the logic to fetch guest user data
    // This can include generating a guest ID or retrieving it from some source
    const guestId = this.currentUserId; // Implement this function or get the ID from the appropriate source
    const guestName = "Guests"; // You may customize this based on your requirements

    return { guestId, guestName };
}
getGuestsChatRooms() {
  try {
    this.getId();
    console.log(this.currentUserId);

    this.chatRooms = this.api.collectionDataQuery(
      'chatRooms',
      this.api.whereQuery('members', 'array-contains', this.currentUserId)
    ).pipe(
      map((data: any[]) => {
        console.log('room data: ', data);

        data.map((element) => {
          const user_data = element.members.filter(x => x != this.currentUserId);
          console.log(user_data);

          try {
            const user = this.api.docDataQuery(`Guests/${user_data[0]}`, true);
            element.user = user;
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        });

        return data;
      }),
      switchMap(data => {
        return of(data);
      })
    );
  } catch (error) {
    console.error('Error in getChatRooms:', error);
  }
} 
}
