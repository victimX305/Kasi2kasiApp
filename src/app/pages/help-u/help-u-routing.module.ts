import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpUPage } from './help-u.page';

const routes: Routes = [
  {
    path: '',
    component: HelpUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpUPageRoutingModule {}
