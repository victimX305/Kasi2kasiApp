import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestEventProfPage } from './guest-event-prof.page';

const routes: Routes = [
  {
    path: '',
    component: GuestEventProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestEventProfPageRoutingModule {}
