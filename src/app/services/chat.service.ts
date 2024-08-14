import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatRooms: Map<string, { messages: string[], unreadCount: number }> = new Map();

  // Method to get the chat room by ID, fetching data from a database
  getChatRoom(chatRoomId: string): Observable<any> {
    // Assuming you have a method to fetch chat room data from your database
    return this.fetchChatRoomDataFromDatabase(chatRoomId);
  }
  private fetchChatRoomDataFromDatabase(chatRoomId: string): Observable<any> {
    // Replace this with your actual logic to fetch chat room data from the database
    // For simplicity, I'm returning a mock Observable here
    return new Observable((observer) => {
      if (!this.chatRooms.has(chatRoomId)) {
        // Initialize the chat room with empty messages and zero unread count
        this.chatRooms.set(chatRoomId, { messages: [], unreadCount: 0 });
      }

      observer.next(this.chatRooms.get(chatRoomId));
    });
  }

  incrementUnreadCount(chatRoomId: string) {
    this.getChatRoom(chatRoomId).subscribe((chatRoom) => {
      if (chatRoom) {
        chatRoom.unreadCount += 1;
      }
    });
  }

  markMessagesAsRead(chatRoomId: string) {
    this.getChatRoom(chatRoomId).subscribe((chatRoom) => {
      if (chatRoom) {
        chatRoom.unreadCount = 0;
      }
    });
  }
  
}