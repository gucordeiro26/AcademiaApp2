import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPopupLoginPageRoutingModule } from './modal-popup-login-routing.module';

import { ModalPopupLoginPage } from './modal-popup-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPopupLoginPageRoutingModule
  ],
  declarations: [ModalPopupLoginPage]
})
export class ModalPopupLoginPageModule {}
