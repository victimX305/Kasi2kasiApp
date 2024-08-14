import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEvents2PageRoutingModule } from './edit-events2-routing.module';

import { EditEvents2Page } from './edit-events2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditEvents2PageRoutingModule
  ],
  declarations: [EditEvents2Page]
})
export class EditEvents2PageModule {}
