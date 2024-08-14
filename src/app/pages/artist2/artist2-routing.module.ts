import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Artist2Page } from './artist2.page';

const routes: Routes = [
  {
    path: '',
    component: Artist2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Artist2PageRoutingModule {}
