import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpVPage } from './help-v.page';

const routes: Routes = [
  {
    path: '',
    component: HelpVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpVPageRoutingModule {}
