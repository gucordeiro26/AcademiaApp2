import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppTreinoExePage } from './app-treino-exe.page';

const routes: Routes = [
  {
    path: '',
    component: AppTreinoExePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppTreinoExePageRoutingModule {}
