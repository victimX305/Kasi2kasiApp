import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestEventVerifyPage } from './guest-event-verify.page';

const routes: Routes = [
  {
    path: '',
    component: GuestEventVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestEventVerifyPageRoutingModule {}
