import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reminder4PageRoutingModule } from './reminder4-routing.module';

import { Reminder4Page } from './reminder4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reminder4PageRoutingModule
  ],
  declarations: [Reminder4Page]
})
export class Reminder4PageModule {}
