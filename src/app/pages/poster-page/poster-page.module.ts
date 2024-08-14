import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosterPagePageRoutingModule } from './poster-page-routing.module';

import { PosterPagePage } from './poster-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosterPagePageRoutingModule
  ],
  declarations: [PosterPagePage]
})
export class PosterPagePageModule {}
