import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
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

  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },
  {
    path: 'app-inicio',
    loadChildren: () => import('./app-inicio/app-inicio.module').then( m => m.AppInicioPageModule)
  },
  {
    path: 'app-perfil',
    loadChildren: () => import('./app-perfil/app-perfil.module').then( m => m.AppPerfilPageModule)
  },
  {
    path: 'app-treino',
    loadChildren: () => import('./app-treino/app-treino.module').then( m => m.AppTreinoPageModule)
  },
  {
    path: 'app-treino-exe',
    loadChildren: () => import('./app-treino-exe/app-treino-exe.module').then( m => m.AppTreinoExePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }