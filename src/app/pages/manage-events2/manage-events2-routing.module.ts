import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageEvents2Page } from './manage-events2.page';

const routes: Routes = [
  {
    path: '',
    component: ManageEvents2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageEvents2PageRoutingModule {}
