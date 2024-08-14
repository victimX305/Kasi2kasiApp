import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHelpPageRoutingModule } from './admin-help-routing.module';

import { AdminHelpPage } from './admin-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHelpPageRoutingModule
  ],
  declarations: [AdminHelpPage]
})
export class AdminHelpPageModule {}
