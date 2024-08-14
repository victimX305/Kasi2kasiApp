import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deactivate4PageRoutingModule } from './deactivate4-routing.module';

import { Deactivate4Page } from './deactivate4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deactivate4PageRoutingModule
  ],
  declarations: [Deactivate4Page]
})
export class Deactivate4PageModule {}
