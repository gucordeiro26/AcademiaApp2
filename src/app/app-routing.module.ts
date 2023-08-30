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
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },
  {
    path: 'modal-popup-login',
    loadChildren: () => import('./modal-popup-login/modal-popup-login.module').then( m => m.ModalPopupLoginPageModule)
  },
  {
    path: 'modal-popup-cadastro',
    loadChildren: () => import('./modal-popup-cadastro/modal-popup-cadastro.module').then( m => m.ModalPopupCadastroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }