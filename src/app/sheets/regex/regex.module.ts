import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegexPageRoutingModule } from './regex-routing.module';

import { RegexPage } from './regex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegexPageRoutingModule
  ],
  declarations: [RegexPage]
})
export class RegexPageModule {}
