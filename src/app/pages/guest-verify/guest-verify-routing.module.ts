import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestVerifyPage } from './guest-verify.page';

const routes: Routes = [
  {
    path: '',
    component: GuestVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestVerifyPageRoutingModule {}
