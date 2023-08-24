import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenClientesPage } from './geren-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: GerenClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenClientesPageRoutingModule {}
