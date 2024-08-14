import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpU2Page } from './help-u2.page';

const routes: Routes = [
  {
    path: '',
    component: HelpU2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpU2PageRoutingModule {}
