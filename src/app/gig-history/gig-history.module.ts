import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigHistoryPageRoutingModule } from './gig-history-routing.module';

import { GigHistoryPage } from './gig-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigHistoryPageRoutingModule
  ],
  declarations: [GigHistoryPage]
})
export class GigHistoryPageModule {}
