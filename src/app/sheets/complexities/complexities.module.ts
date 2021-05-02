import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplexitiesPageRoutingModule } from './complexities-routing.module';

import { ComplexitiesPage } from './complexities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplexitiesPageRoutingModule
  ],
  declarations: [ComplexitiesPage]
})
export class ComplexitiesPageModule {}
