import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestVerifyPageRoutingModule } from './guest-verify-routing.module';

import { GuestVerifyPage } from './guest-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestVerifyPageRoutingModule
  ],
  declarations: [GuestVerifyPage]
})
export class GuestVerifyPageModule {}
