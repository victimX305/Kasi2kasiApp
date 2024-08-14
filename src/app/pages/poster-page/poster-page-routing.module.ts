import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosterPagePage } from './poster-page.page';

const routes: Routes = [
  {
    path: '',
    component: PosterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosterPagePageRoutingModule {}
