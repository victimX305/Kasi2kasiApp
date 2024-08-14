import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Poster2Page } from './poster2.page';

const routes: Routes = [
  {
    path: '',
    component: Poster2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Poster2PageRoutingModule {}
