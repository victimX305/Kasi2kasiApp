// msg-count.component.ts

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChatCountService } from 'src/app/services/chat-count.service';
import { Subscription } from 'rxjs';
import { ChatRoom } from 'src/app/chat-room.model';
import { ActivatedRoute } from '@angular/router';
//import { ChatRoom } from 'path-to-your-chat-room-model'; // Update with your actual path

@Component({
  selector: 'app-msg-count',
  templateUrl: './msg-count.component.html',
  styleUrls: ['./msg-count.component.scss'],
})
export class MsgCountComponent implements OnInit, OnDestroy {
  chatRoomId: string | null = null;
  newMessageCount: number = 0;

  constructor(private route: ActivatedRoute, private chatCountService: ChatCountService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // Get the chat room ID from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.chatRoomId = params.get('id');
      
      // Subscribe to the new message count for this chat room
      if (this.chatRoomId) {
        this.chatCountService.getNewMessageCount(this.chatRoomId).subscribe((count) => {
          this.newMessageCount = count;
        });
      }
    });
  }
}
