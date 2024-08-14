import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserToGuestPageRoutingModule } from './user-to-guest-routing.module';

import { UserToGuestPage } from './user-to-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserToGuestPageRoutingModule
  ],
  declarations: [UserToGuestPage]
})
export class UserToGuestPageModule {}
