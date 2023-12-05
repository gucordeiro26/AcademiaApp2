import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Certifique-se de importar o ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { AdminAdcionarPageRoutingModule } from './admin-adcionar-routing.module';
import { AdminAdcionarPage } from './admin-adcionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAdcionarPageRoutingModule,
    ReactiveFormsModule, // Importe o ReactiveFormsModule aqui
  ],
  declarations: [AdminAdcionarPage]
})
export class AdminAdcionarPageModule {}
