import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyProPageRoutingModule } from './verify-pro-routing.module';

import { VerifyProPage } from './verify-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyProPageRoutingModule
  ],
  declarations: [VerifyProPage]
})
export class VerifyProPageModule {}
