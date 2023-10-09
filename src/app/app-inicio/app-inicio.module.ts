import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppInicioPageRoutingModule } from './app-inicio-routing.module';

import { AppInicioPage } from './app-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppInicioPageRoutingModule
  ],
  declarations: [AppInicioPage]
})
export class AppInicioPageModule {}
