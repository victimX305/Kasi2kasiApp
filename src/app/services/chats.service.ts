import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  currentUserId: string;

  
  constructor(private db: AngularFireDatabase,
    public auth: AuthService,) {}
   // chatroomId: string;
   getNewMessageCount(chatroomId: string): Observable<number> {
    return this.db.object(`chatRooms/${chatroomId}/newMessageCount`).valueChanges() as Observable<number>;
  }

  updateNewMessageCount(chatroomId: string, hasNewMessage: boolean) {
    if (hasNewMessage) {
      this.db.object(`chatRooms/${chatroomId}/newMessageCount`).set(1);
    } else {
      this.db.object(`chatRooms/${chatroomId}/newMessageCount`).set(0);
    }
  }
}