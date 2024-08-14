import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestDetailsPagePage } from './guest-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: GuestDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestDetailsPagePageRoutingModule {}
