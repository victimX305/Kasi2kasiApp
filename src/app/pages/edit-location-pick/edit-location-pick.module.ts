import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLocationPickPageRoutingModule } from './edit-location-pick-routing.module';

import { EditLocationPickPage } from './edit-location-pick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLocationPickPageRoutingModule
  ],
  declarations: [EditLocationPickPage]
})
export class EditLocationPickPageModule {}
