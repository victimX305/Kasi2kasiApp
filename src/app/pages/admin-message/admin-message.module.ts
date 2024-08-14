import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMessagePageRoutingModule } from './admin-message-routing.module';

import { AdminMessagePage } from './admin-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMessagePageRoutingModule
  ],
  declarations: [AdminMessagePage]
})
export class AdminMessagePageModule {}
