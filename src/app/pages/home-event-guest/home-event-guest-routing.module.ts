import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEventGuestPage } from './home-event-guest.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEventGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEventGuestPageRoutingModule {}
