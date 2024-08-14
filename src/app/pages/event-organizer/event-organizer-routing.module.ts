import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventOrganizerPage } from './event-organizer.page';

const routes: Routes = [
  {
    path: '',
    component: EventOrganizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventOrganizerPageRoutingModule {}
