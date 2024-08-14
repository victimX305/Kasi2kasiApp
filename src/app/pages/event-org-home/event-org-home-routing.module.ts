import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventOrgHomePage } from './event-org-home.page';

const routes: Routes = [
  {
    path: '',
    component: EventOrgHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventOrgHomePageRoutingModule {}
