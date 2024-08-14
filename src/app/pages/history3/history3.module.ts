import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { History3PageRoutingModule } from './history3-routing.module';

import { History3Page } from './history3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    History3PageRoutingModule
  ],
  declarations: [History3Page]
})
export class History3PageModule {}
