import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGuestListPageRoutingModule } from './edit-guest-list-routing.module';

import { EditGuestListPage } from './edit-guest-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGuestListPageRoutingModule
  ],
  declarations: [EditGuestListPage]
})
export class EditGuestListPageModule {}
