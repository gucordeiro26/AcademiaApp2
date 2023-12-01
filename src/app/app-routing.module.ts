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
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },  {
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