import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPopupCadastroPage } from './modal-popup-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPopupCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPopupCadastroPageRoutingModule {}
