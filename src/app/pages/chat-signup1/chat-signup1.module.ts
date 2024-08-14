import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatSignup1PageRoutingModule } from './chat-signup1-routing.module';

import { ChatSignup1Page } from './chat-signup1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatSignup1PageRoutingModule
  ],
  declarations: [ChatSignup1Page]
})
export class ChatSignup1PageModule {}
