import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppPageRoutingModule } from './cpp-routing.module';

import { CppPage } from './cpp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppPageRoutingModule
  ],
  declarations: [CppPage]
})
export class CppPageModule {}
