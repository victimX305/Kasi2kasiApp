import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Poster3PageRoutingModule } from './poster3-routing.module';

import { Poster3Page } from './poster3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Poster3PageRoutingModule
  ],
  declarations: [Poster3Page]
})
export class Poster3PageModule {}
