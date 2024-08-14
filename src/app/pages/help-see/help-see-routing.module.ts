import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpSeePage } from './help-see.page';

const routes: Routes = [
  {
    path: '',
    component: HelpSeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpSeePageRoutingModule {}
