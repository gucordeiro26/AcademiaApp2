import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminExerciciosPage } from './admin-exercicios.page';

const routes: Routes = [
  {
    path: '',
    component: AdminExerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminExerciciosPageRoutingModule {}
