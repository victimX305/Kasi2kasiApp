import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreckPage } from './preck.page';

const routes: Routes = [
  {
    path: '',
    component: PreckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreckPageRoutingModule {}
