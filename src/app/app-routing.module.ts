import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-adcionar',
    loadChildren: () => import('./admin-adcionar/admin-adcionar.module').then( m => m.AdminAdcionarPageModule)
  },
  {
    path: 'admin-exercicios',
    loadChildren: () => import('./admin-exercicios/admin-exercicios.module').then( m => m.AdminExerciciosPageModule)
  },
  {
    path: 'admin-list',
    loadChildren: () => import('./admin-list/admin-list.module').then( m => m.AdminListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }