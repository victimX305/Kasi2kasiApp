import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestEventDetailsPageRoutingModule } from './guest-event-details-routing.module';

import { GuestEventDetailsPage } from './guest-event-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestEventDetailsPageRoutingModule
  ],
  declarations: [GuestEventDetailsPage]
})
export class GuestEventDetailsPageModule {}
