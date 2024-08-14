import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  countNewMessagesForChatRooms(recipientId: string) {
    throw new Error('Method not implemented.');
  }
  calculateNewMessageCountForChatrooms() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
