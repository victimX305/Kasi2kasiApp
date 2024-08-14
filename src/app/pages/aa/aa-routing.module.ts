import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AaPage } from './aa.page';

const routes: Routes = [
  {
    path: '',
    component: AaPage
  },
  {
    path: 'v',
    loadChildren: () => import('./v/v.module').then( m => m.VPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AaPageRoutingModule {}
