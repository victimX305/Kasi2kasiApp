import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvmPageRoutingModule } from './avm-routing.module';

import { AvmPage } from './avm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvmPageRoutingModule
  ],
  declarations: [AvmPage]
})
export class AvmPageModule {}
