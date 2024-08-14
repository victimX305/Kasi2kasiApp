import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Artist4Page } from './artist4.page';

const routes: Routes = [
  {
    path: '',
    component: Artist4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Artist4PageRoutingModule {}
