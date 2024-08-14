import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { History1PageRoutingModule } from './history1-routing.module';

import { History1Page } from './history1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    History1PageRoutingModule
  ],
  declarations: [History1Page]
})
export class History1PageModule {}
