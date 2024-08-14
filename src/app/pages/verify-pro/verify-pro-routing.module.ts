import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyProPage } from './verify-pro.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyProPageRoutingModule {}
