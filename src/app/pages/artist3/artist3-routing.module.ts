import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Artist3Page } from './artist3.page';

const routes: Routes = [
  {
    path: '',
    component: Artist3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Artist3PageRoutingModule {}
