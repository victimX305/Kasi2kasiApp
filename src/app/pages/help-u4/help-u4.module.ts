import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpU4PageRoutingModule } from './help-u4-routing.module';

import { HelpU4Page } from './help-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpU4PageRoutingModule
  ],
  declarations: [HelpU4Page]
})
export class HelpU4PageModule {}
