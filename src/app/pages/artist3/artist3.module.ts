import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Artist3PageRoutingModule } from './artist3-routing.module';

import { Artist3Page } from './artist3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Artist3PageRoutingModule
  ],
  declarations: [Artist3Page]
})
export class Artist3PageModule {}
