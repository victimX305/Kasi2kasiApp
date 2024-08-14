import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageEvents2PageRoutingModule } from './manage-events2-routing.module';

import { ManageEvents2Page } from './manage-events2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageEvents2PageRoutingModule
  ],
  declarations: [ManageEvents2Page]
})
export class ManageEvents2PageModule {}
