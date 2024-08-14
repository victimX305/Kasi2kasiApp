import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { History3Page } from './history3.page';

const routes: Routes = [
  {
    path: '',
    component: History3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class History3PageRoutingModule {}
