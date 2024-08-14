import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatSignup1Page } from './chat-signup1.page';

const routes: Routes = [
  {
    path: '',
    component: ChatSignup1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSignup1PageRoutingModule {}
