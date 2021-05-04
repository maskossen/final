import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewUsersNotesPageRoutingModule } from './view-users-notes-routing.module';

import { ViewUsersNotesPage } from './view-users-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewUsersNotesPageRoutingModule
  ],
  declarations: [ViewUsersNotesPage]
})
export class ViewUsersNotesPageModule {}
