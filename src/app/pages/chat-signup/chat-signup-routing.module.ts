import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatSignupPage } from './chat-signup.page';

const routes: Routes = [
  {
    path: '',
    component: ChatSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSignupPageRoutingModule {}
