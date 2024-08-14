import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfUserPageRoutingModule } from './prof-user-routing.module';

import { ProfUserPage } from './prof-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfUserPageRoutingModule
  ],
  declarations: [ProfUserPage]
})
export class ProfUserPageModule {}
