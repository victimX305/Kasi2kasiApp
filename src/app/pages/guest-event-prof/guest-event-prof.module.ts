import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestEventProfPageRoutingModule } from './guest-event-prof-routing.module';

import { GuestEventProfPage } from './guest-event-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestEventProfPageRoutingModule
  ],
  declarations: [GuestEventProfPage]
})
export class GuestEventProfPageModule {}
