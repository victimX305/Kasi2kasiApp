import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageGigsPageRoutingModule } from './manage-gigs-routing.module';

import { ManageGigsPage } from './manage-gigs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGigsPageRoutingModule
  ],
  declarations: [ManageGigsPage]
})
export class ManageGigsPageModule {}
