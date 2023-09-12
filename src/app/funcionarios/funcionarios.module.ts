import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionariosPageRoutingModule } from './funcionarios-routing.module';

import { FuncionariosPage } from './funcionarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionariosPageRoutingModule
  ],
  declarations: [FuncionariosPage]
})
export class FuncionariosPageModule {}
