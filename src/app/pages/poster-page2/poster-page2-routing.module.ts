import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosterPage2Page } from './poster-page2.page';

const routes: Routes = [
  {
    path: '',
    component: PosterPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosterPage2PageRoutingModule {}
