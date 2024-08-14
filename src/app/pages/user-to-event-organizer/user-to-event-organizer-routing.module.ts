import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserToEventOrganizerPage } from './user-to-event-organizer.page';

const routes: Routes = [
  {
    path: '',
    component: UserToEventOrganizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserToEventOrganizerPageRoutingModule {}
