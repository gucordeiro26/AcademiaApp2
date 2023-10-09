import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPerfilPage } from './app-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: AppPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPerfilPageRoutingModule {}
