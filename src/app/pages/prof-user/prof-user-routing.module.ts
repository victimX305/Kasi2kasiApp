import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfUserPage } from './prof-user.page';

const routes: Routes = [
  {
    path: '',
    component: ProfUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfUserPageRoutingModule {}
