import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deactivate2Page } from './deactivate2.page';

const routes: Routes = [
  {
    path: '',
    component: Deactivate2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deactivate2PageRoutingModule {}
