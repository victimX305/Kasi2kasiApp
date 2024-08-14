import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reminder1PageRoutingModule } from './reminder1-routing.module';

import { Reminder1Page } from './reminder1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reminder1PageRoutingModule
  ],
  declarations: [Reminder1Page]
})
export class Reminder1PageModule {}
