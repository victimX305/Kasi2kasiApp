import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEvent2PageRoutingModule } from './create-event2-routing.module';

import { CreateEvent2Page } from './create-event2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateEvent2PageRoutingModule
  ],
  declarations: [CreateEvent2Page]
})
export class CreateEvent2PageModule {}
