import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPageRoutingModule } from './request-routing.module';

import { RequestPage } from './request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RequestPageRoutingModule
  ],
  declarations: [RequestPage]
})
export class RequestPageModule {}
