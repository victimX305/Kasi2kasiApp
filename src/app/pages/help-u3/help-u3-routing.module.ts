import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpU3Page } from './help-u3.page';

const routes: Routes = [
  {
    path: '',
    component: HelpU3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpU3PageRoutingModule {}
