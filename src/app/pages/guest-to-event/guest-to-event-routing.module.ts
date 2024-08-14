import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestToEventPage } from './guest-to-event.page';

const routes: Routes = [
  {
    path: '',
    component: GuestToEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestToEventPageRoutingModule {}
