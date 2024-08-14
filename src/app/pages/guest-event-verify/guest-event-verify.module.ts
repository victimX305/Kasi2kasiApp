import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestEventVerifyPageRoutingModule } from './guest-event-verify-routing.module';

import { GuestEventVerifyPage } from './guest-event-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestEventVerifyPageRoutingModule
  ],
  declarations: [GuestEventVerifyPage]
})
export class GuestEventVerifyPageModule {}
