import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpU4Page } from './help-u4.page';

const routes: Routes = [
  {
    path: '',
    component: HelpU4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpU4PageRoutingModule {}
