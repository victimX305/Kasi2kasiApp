import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestRegPage } from './guest-reg.page';

const routes: Routes = [
  {
    path: '',
    component: GuestRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRegPageRoutingModule {}
