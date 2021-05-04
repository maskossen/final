import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewUsersNotesPage } from './view-users-notes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewUsersNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUsersNotesPageRoutingModule {}
