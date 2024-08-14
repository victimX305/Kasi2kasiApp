import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from './firestore.service';

import { IonicModule } from '@ionic/angular';

import { HelpUPageRoutingModule } from './help-u-routing.module';

import { HelpUPage } from './help-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpUPageRoutingModule
  ],
  declarations: [HelpUPage],
  providers: [FirestoreService],
})
export class HelpUPageModule {}
