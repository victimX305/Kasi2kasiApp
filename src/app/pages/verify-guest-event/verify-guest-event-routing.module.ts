import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyGuestEventPage } from './verify-guest-event.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyGuestEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyGuestEventPageRoutingModule {}
