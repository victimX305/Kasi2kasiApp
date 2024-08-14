import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageGigs2PageRoutingModule } from './manage-gigs2-routing.module';

import { ManageGigs2Page } from './manage-gigs2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGigs2PageRoutingModule
  ],
  declarations: [ManageGigs2Page]
})
export class ManageGigs2PageModule {}
