// chat-count.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatCountService {
  private newMessageCounts: Map<string, BehaviorSubject<number>> = new Map<string, BehaviorSubject<number>>();

  constructor() {}

  sendMessage(chatRoomId: string): void {
    const currentCount = this.newMessageCounts.get(chatRoomId) || new BehaviorSubject<number>(0);
    currentCount.next(currentCount.value + 1);
    this.newMessageCounts.set(chatRoomId, currentCount);
  }

  getNewMessageCount(chatRoomId: string): Observable<number> {
    if (!this.newMessageCounts.has(chatRoomId)) {
      this.newMessageCounts.set(chatRoomId, new BehaviorSubject<number>(0));
    }
    return this.newMessageCounts.get(chatRoomId)!.asObservable();
  }

  clearNewMessageCount(chatRoomId: string): void {
    if (this.newMessageCounts.has(chatRoomId)) {
      this.newMessageCounts.get(chatRoomId)!.next(0);
    }
  }
}
