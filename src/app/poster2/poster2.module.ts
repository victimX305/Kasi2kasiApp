import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Poster2PageRoutingModule } from './poster2-routing.module';

import { Poster2Page } from './poster2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Poster2PageRoutingModule
  ],
  declarations: [Poster2Page]
})
export class Poster2PageModule {}
