import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpU2PageRoutingModule } from './help-u2-routing.module';

import { HelpU2Page } from './help-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpU2PageRoutingModule
  ],
  declarations: [HelpU2Page]
})
export class HelpU2PageModule {}
