import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppTreinoPageRoutingModule } from './app-treino-routing.module';

import { AppTreinoPage } from './app-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppTreinoPageRoutingModule
  ],
  declarations: [AppTreinoPage]
})
export class AppTreinoPageModule {}
