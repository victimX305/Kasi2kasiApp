import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reminder3Page } from './reminder3.page';

const routes: Routes = [
  {
    path: '',
    component: Reminder3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reminder3PageRoutingModule {}
