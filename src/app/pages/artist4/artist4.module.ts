import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Artist4PageRoutingModule } from './artist4-routing.module';

import { Artist4Page } from './artist4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Artist4PageRoutingModule
  ],
  declarations: [Artist4Page]
})
export class Artist4PageModule {}
