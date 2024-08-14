import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { History4PageRoutingModule } from './history4-routing.module';

import { History4Page } from './history4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    History4PageRoutingModule
  ],
  declarations: [History4Page]
})
export class History4PageModule {}
