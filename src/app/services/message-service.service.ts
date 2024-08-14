import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
interface ChatRoom {
  recipientId: string;
  messages: string[];
  newMessageCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private chatRooms: Map<string, ChatRoom> = new Map();

  constructor() { }
  createChatRoom(recipientId: string) {
    if (!this.chatRooms.has(recipientId)) {
      this.chatRooms.set(recipientId, { recipientId, messages: [], newMessageCount: 0 });
    }
  }
   // Add a new message to a chat room and increment the new message count.
   addMessage(recipientId: string, message: string) {
    if (this.chatRooms.has(recipientId)) {
      const chatRoom = this.chatRooms.get(recipientId);
      chatRoom.messages.push(message);
      chatRoom.newMessageCount++;
    }
  }
   // Get the new message count for a specific chat room.
   getNewMessageCount(recipientId: string): number {
    const chatRoom = this.chatRooms.get(recipientId);
    return chatRoom ? chatRoom.newMessageCount : 0;
  }

  }
