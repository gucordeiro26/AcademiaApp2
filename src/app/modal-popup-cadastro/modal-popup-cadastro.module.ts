import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPopupCadastroPageRoutingModule } from './modal-popup-cadastro-routing.module';

import { ModalPopupCadastroPage } from './modal-popup-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPopupCadastroPageRoutingModule
  ],
  declarations: [ModalPopupCadastroPage]
})
export class ModalPopupCadastroPageModule {}
