import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppTreinoPage } from './app-treino.page';

const routes: Routes = [
  {
    path: '',
    component: AppTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppTreinoPageRoutingModule {}
