import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosterPage2PageRoutingModule } from './poster-page2-routing.module';

import { PosterPage2Page } from './poster-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosterPage2PageRoutingModule
  ],
  declarations: [PosterPage2Page]
})
export class PosterPage2PageModule {}
