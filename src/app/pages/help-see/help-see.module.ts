import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpSeePageRoutingModule } from './help-see-routing.module';

import { HelpSeePage } from './help-see.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpSeePageRoutingModule
  ],
  declarations: [HelpSeePage]
})
export class HelpSeePageModule {}
