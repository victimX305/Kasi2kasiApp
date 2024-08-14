import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deactivate2PageRoutingModule } from './deactivate2-routing.module';

import { Deactivate2Page } from './deactivate2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deactivate2PageRoutingModule
  ],
  declarations: [Deactivate2Page]
})
export class Deactivate2PageModule {}
