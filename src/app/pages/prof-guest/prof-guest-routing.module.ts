import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfGuestPage } from './prof-guest.page';

const routes: Routes = [
  {
    path: '',
    component: ProfGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfGuestPageRoutingModule {}
