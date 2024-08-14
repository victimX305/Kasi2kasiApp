import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPageRoutingModule } from './chats-routing.module';

import { ChatsPage } from './chats.page';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderByMostRecentPipe } from 'src/app/order-by-most-recent.pipe';
//import { MsgCountComponent } from 'src/app/components/msg-count/msg-count.component';
//import { ChatsComponent } from 'src/app/components/chats/chats.component';
//mport { ChatComponent } from 'src/app/components/chat/chat.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  //schemas: [NO_ERRORS_SCHEMA],
  declarations: [ChatsPage, UserListComponent, OrderByMostRecentPipe]
})
export class ChatsPageModule {}
