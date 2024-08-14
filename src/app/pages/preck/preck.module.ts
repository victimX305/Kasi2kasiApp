import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreckPageRoutingModule } from './preck-routing.module';

import { PreckPage } from './preck.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreckPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PreckPage]
})
export class PreckPageModule {}
