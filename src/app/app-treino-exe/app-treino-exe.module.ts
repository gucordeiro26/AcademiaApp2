import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppTreinoExePageRoutingModule } from './app-treino-exe-routing.module';

import { AppTreinoExePage } from './app-treino-exe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppTreinoExePageRoutingModule
  ],
  declarations: [AppTreinoExePage]
})
export class AppTreinoExePageModule {}
