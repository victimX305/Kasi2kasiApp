import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfEventPage } from './prof-event.page';

const routes: Routes = [
  {
    path: '',
    component: ProfEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfEventPageRoutingModule {}
