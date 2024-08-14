import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reminder4Page } from './reminder4.page';

const routes: Routes = [
  {
    path: '',
    component: Reminder4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reminder4PageRoutingModule {}
