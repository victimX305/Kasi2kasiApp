import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpU3PageRoutingModule } from './help-u3-routing.module';

import { HelpU3Page } from './help-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpU3PageRoutingModule
  ],
  declarations: [HelpU3Page]
})
export class HelpU3PageModule {}
