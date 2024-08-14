import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GigHistoryPage } from './gig-history.page';

const routes: Routes = [
  {
    path: '',
    component: GigHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigHistoryPageRoutingModule {}
