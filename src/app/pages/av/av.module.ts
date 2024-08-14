import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvPageRoutingModule } from './av-routing.module';

import { AvPage } from './av.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvPageRoutingModule
  ],
  declarations: [AvPage]
})
export class AvPageModule {}
