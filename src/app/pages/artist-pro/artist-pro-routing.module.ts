import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistProPage } from './artist-pro.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistProPageRoutingModule {}
