import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListPageRoutingModule } from './admin-list-routing.module';

import { AdminListPage } from './admin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminListPage]
})
export class AdminListPageModule {}
