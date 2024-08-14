import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventOrgHomePageRoutingModule } from './event-org-home-routing.module';

import { EventOrgHomePage } from './event-org-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventOrgHomePageRoutingModule
  ],
  declarations: [EventOrgHomePage]
})
export class EventOrgHomePageModule {}
