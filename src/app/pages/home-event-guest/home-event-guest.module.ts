import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEventGuestPageRoutingModule } from './home-event-guest-routing.module';

import { HomeEventGuestPage } from './home-event-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEventGuestPageRoutingModule
  ],
  declarations: [HomeEventGuestPage]
})
export class HomeEventGuestPageModule {}
