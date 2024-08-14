import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatLoginPageRoutingModule } from './chat-login-routing.module';

import { ChatLoginPage } from './chat-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChatLoginPage]
})
export class ChatLoginPageModule {}
