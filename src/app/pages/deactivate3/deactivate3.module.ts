import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deactivate3PageRoutingModule } from './deactivate3-routing.module';

import { Deactivate3Page } from './deactivate3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deactivate3PageRoutingModule
  ],
  declarations: [Deactivate3Page]
})
export class Deactivate3PageModule {}
