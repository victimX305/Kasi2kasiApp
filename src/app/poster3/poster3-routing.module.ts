import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Poster3Page } from './poster3.page';

const routes: Routes = [
  {
    path: '',
    component: Poster3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Poster3PageRoutingModule {}
