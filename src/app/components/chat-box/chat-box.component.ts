import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/Models/chat';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent  implements OnInit {
  
  @Input() chats: Observable<Chat[]>; // Observable of chat messages
  @Input() wallpaperUrl: string; // URL for wallpaper
  @Input() model: any; // Update with correct model type
  @Input() chat: any;
  @Input() current_user_id: any;
  previousMessageDate: Date;
  isNewDayFlag = false;
  constructor(private modalController: ModalController,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isNewDayFlag = false; // Update the flag after a delay
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  
  
  }
  async viewImage(imageSrc: string) {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: { imageSrc: imageSrc }
    });
    return await modal.present();
  }
  isNewDay(currentMessageDate: Date, previousMessageDate: Date): boolean {
    if (!previousMessageDate) {
      // If there's no previous message date, it's a new day
      this.previousMessageDate = currentMessageDate;
      return true;
    }

    // Compare current message date with previous message date
    const currentDay = currentMessageDate.getDate();
    const previousDay = previousMessageDate.getDate();

    if (currentDay !== previousDay) {
      this.previousMessageDate = currentMessageDate; // Update previousMessageDate
      return true;
    }
    return false;
  }

}