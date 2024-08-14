import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VPageRoutingModule } from './v-routing.module';

import { VPage } from './v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VPageRoutingModule
  ],
  declarations: [VPage]
})
export class VPageModule {}
