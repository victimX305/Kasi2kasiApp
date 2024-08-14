import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { History4Page } from './history4.page';

const routes: Routes = [
  {
    path: '',
    component: History4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class History4PageRoutingModule {}
