import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppInicioPage } from './app-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: AppInicioPage,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppInicioPageRoutingModule {}
