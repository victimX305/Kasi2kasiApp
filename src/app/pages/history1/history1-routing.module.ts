import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { History1Page } from './history1.page';

const routes: Routes = [
  {
    path: '',
    component: History1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class History1PageRoutingModule {}
