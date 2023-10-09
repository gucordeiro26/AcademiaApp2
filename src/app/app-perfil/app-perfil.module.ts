import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppPerfilPageRoutingModule } from './app-perfil-routing.module';

import { AppPerfilPage } from './app-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPerfilPageRoutingModule
  ],
  declarations: [AppPerfilPage]
})
export class AppPerfilPageModule {}
