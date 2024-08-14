import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEvents2Page } from './edit-events2.page';

const routes: Routes = [
  {
    path: '',
    component: EditEvents2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEvents2PageRoutingModule {}
