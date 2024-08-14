import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deactivate3Page } from './deactivate3.page';

const routes: Routes = [
  {
    path: '',
    component: Deactivate3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deactivate3PageRoutingModule {}
