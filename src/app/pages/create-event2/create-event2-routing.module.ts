import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEvent2Page } from './create-event2.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEvent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEvent2PageRoutingModule {}
