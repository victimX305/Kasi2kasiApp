import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvmPage } from './avm.page';

const routes: Routes = [
  {
    path: '',
    component: AvmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvmPageRoutingModule {}
