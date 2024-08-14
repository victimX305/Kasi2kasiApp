import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AaPageRoutingModule } from './aa-routing.module';

import { AaPage } from './aa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AaPageRoutingModule
  ],
  declarations: [AaPage]
})
export class AaPageModule {}
