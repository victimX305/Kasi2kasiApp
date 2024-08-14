import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyGuestPage } from './verify-guest.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyGuestPageRoutingModule {}
