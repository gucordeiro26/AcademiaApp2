import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminExerciciosPageRoutingModule } from './admin-exercicios-routing.module';

import { AdminExerciciosPage } from './admin-exercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminExerciciosPageRoutingModule
  ],
  declarations: [AdminExerciciosPage]
})
export class AdminExerciciosPageModule {}
