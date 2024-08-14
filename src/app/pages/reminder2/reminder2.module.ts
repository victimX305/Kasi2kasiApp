import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reminder2PageRoutingModule } from './reminder2-routing.module';

import { Reminder2Page } from './reminder2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reminder2PageRoutingModule
  ],
  declarations: [Reminder2Page]
})
export class Reminder2PageModule {}
