import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PythonPage } from './python.page';

const routes: Routes = [
  {
    path: '',
    component: PythonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythonPageRoutingModule {}
