import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserToGuestPage } from './user-to-guest.page';

const routes: Routes = [
  {
    path: '',
    component: UserToGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserToGuestPageRoutingModule {}
