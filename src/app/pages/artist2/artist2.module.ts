import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Artist2PageRoutingModule } from './artist2-routing.module';

import { Artist2Page } from './artist2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Artist2PageRoutingModule
  ],
  declarations: [Artist2Page]
})
export class Artist2PageModule {}
