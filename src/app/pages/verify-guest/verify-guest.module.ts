import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyGuestPageRoutingModule } from './verify-guest-routing.module';

import { VerifyGuestPage } from './verify-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyGuestPageRoutingModule
  ],
  declarations: [VerifyGuestPage]
})
export class VerifyGuestPageModule {}
