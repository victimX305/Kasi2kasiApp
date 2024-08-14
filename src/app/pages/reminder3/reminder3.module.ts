import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reminder3PageRoutingModule } from './reminder3-routing.module';

import { Reminder3Page } from './reminder3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reminder3PageRoutingModule
  ],
  declarations: [Reminder3Page]
})
export class Reminder3PageModule {}
