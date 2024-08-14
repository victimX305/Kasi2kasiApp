import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserToEventOrganizerPageRoutingModule } from './user-to-event-organizer-routing.module';

import { UserToEventOrganizerPage } from './user-to-event-organizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserToEventOrganizerPageRoutingModule
  ],
  declarations: [UserToEventOrganizerPage]
})
export class UserToEventOrganizerPageModule {}
