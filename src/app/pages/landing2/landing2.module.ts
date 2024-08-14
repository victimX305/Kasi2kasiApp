import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Landing2PageRoutingModule } from './landing2-routing.module';

import { Landing2Page } from './landing2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Landing2PageRoutingModule
  ],
  declarations: [Landing2Page]
})
export class Landing2PageModule {}
