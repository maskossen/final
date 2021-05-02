import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PythonPageRoutingModule } from './python-routing.module';

import { PythonPage } from './python.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PythonPageRoutingModule
  ],
  declarations: [PythonPage]
})
export class PythonPageModule {}
