import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpVPageRoutingModule } from './help-v-routing.module';

import { HelpVPage } from './help-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpVPageRoutingModule
  ],
  declarations: [HelpVPage]
})
export class HelpVPageModule {}
