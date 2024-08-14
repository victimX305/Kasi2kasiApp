import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatLoginPage } from './chat-login.page';

const routes: Routes = [
  {
    path: '',
    component: ChatLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatLoginPageRoutingModule {}
