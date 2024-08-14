import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestRegPageRoutingModule } from './guest-reg-routing.module';

import { GuestRegPage } from './guest-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GuestRegPageRoutingModule
  ],
  declarations: [GuestRegPage]
})
export class GuestRegPageModule {}
