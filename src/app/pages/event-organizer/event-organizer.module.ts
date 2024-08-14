import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventOrganizerPageRoutingModule } from './event-organizer-routing.module';

import { EventOrganizerPage } from './event-organizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EventOrganizerPageRoutingModule
  ],
  declarations: [EventOrganizerPage]
})
export class EventOrganizerPageModule {}
