import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestDetailsPagePageRoutingModule } from './guest-details-page-routing.module';

import { GuestDetailsPagePage } from './guest-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestDetailsPagePageRoutingModule
  ],
  declarations: [GuestDetailsPagePage]
})
export class GuestDetailsPagePageModule {}
