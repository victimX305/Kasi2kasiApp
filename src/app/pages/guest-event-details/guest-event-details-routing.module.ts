import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestEventDetailsPage } from './guest-event-details.page';

const routes: Routes = [
  {
    path: '',
    component: GuestEventDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestEventDetailsPageRoutingModule {}
