import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reminder2Page } from './reminder2.page';

const routes: Routes = [
  {
    path: '',
    component: Reminder2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reminder2PageRoutingModule {}
