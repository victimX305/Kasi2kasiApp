import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reminder1Page } from './reminder1.page';

const routes: Routes = [
  {
    path: '',
    component: Reminder1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reminder1PageRoutingModule {}
