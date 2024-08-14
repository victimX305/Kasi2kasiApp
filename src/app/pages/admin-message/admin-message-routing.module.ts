import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMessagePage } from './admin-message.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMessagePageRoutingModule {}
