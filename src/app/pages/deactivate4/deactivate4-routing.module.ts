import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deactivate4Page } from './deactivate4.page';

const routes: Routes = [
  {
    path: '',
    component: Deactivate4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deactivate4PageRoutingModule {}
