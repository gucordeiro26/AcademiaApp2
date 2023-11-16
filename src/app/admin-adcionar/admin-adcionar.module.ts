import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAdcionarPageRoutingModule } from './admin-adcionar-routing.module';

import { AdminAdcionarPage } from './admin-adcionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAdcionarPageRoutingModule
  ],
  declarations: [AdminAdcionarPage]
})
export class AdminAdcionarPageModule {}
