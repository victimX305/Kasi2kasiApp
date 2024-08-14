import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyGuestEventPageRoutingModule } from './verify-guest-event-routing.module';

import { VerifyGuestEventPage } from './verify-guest-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyGuestEventPageRoutingModule
  ],
  declarations: [VerifyGuestEventPage]
})
export class VerifyGuestEventPageModule {}
