import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHelpPage } from './admin-help.page';

const routes: Routes = [
  {
    path: '',
    component: AdminHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHelpPageRoutingModule {}
