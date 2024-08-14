import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatSignupPageRoutingModule } from './chat-signup-routing.module';

import { ChatSignupPage } from './chat-signup.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatSignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChatSignupPage]
})
export class ChatSignupPageModule {}
