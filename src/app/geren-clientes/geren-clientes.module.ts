import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenClientesPageRoutingModule } from './geren-clientes-routing.module';

import { GerenClientesPage } from './geren-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenClientesPageRoutingModule
  ],
  declarations: [GerenClientesPage]
})
export class GerenClientesPageModule {}
