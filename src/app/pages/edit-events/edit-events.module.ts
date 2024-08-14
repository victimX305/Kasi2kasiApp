import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEventsPageRoutingModule } from './edit-events-routing.module';

import { EditEventsPage } from './edit-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditEventsPageRoutingModule
  ],
  
  declarations: [EditEventsPage]
})
export class EditEventsPageModule {}
