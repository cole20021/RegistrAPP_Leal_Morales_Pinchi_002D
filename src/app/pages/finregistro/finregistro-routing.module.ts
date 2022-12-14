import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinregistroPage } from './finregistro.page';

const routes: Routes = [
  {
    path: '',
    component: FinregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinregistroPageRoutingModule {}
