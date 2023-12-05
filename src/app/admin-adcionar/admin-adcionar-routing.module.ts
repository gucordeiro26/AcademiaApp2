import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAdcionarPage } from './admin-adcionar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAdcionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAdcionarPageRoutingModule {}
