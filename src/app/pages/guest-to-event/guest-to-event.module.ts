import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestToEventPageRoutingModule } from './guest-to-event-routing.module';

import { GuestToEventPage } from './guest-to-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GuestToEventPageRoutingModule
  ],
  declarations: [GuestToEventPage]
})
export class GuestToEventPageModule {}
