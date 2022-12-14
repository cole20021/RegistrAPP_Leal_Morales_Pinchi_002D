import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinescanerPage } from './finescaner.page';

const routes: Routes = [
  {
    path: '',
    component: FinescanerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinescanerPageRoutingModule {}
