import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLocationPickPage } from './edit-location-pick.page';

const routes: Routes = [
  {
    path: '',
    component: EditLocationPickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLocationPickPageRoutingModule {}
