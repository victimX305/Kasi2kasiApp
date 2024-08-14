import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationPickPage } from './location-pick.page';

const routes: Routes = [
  {
    path: '',
    component: LocationPickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationPickPageRoutingModule {}
