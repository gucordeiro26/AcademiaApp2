import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';
import { AppInicioPage } from '../app-inicio/app-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage
  },
  {
    path: 'app-inicio',
    component: AppInicioPage
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}
