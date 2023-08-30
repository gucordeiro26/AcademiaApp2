import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPopupLoginPage } from './modal-popup-login.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPopupLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPopupLoginPageRoutingModule {}
