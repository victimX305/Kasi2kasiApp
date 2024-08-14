import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistProPageRoutingModule } from './artist-pro-routing.module';

import { ArtistProPage } from './artist-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistProPageRoutingModule
  ],
  declarations: [ArtistProPage]
})
export class ArtistProPageModule {}
