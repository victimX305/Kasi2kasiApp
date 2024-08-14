import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageGigs2Page } from './manage-gigs2.page';

const routes: Routes = [
  {
    path: '',
    component: ManageGigs2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGigs2PageRoutingModule {}
