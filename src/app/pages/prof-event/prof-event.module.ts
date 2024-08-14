import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfEventPageRoutingModule } from './prof-event-routing.module';

import { ProfEventPage } from './prof-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfEventPageRoutingModule
  ],
  declarations: [ProfEventPage]
})
export class ProfEventPageModule {}
