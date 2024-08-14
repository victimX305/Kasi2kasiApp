import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfGuestPageRoutingModule } from './prof-guest-routing.module';

import { ProfGuestPage } from './prof-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfGuestPageRoutingModule
  ],
  declarations: [ProfGuestPage]
})
export class ProfGuestPageModule {}
