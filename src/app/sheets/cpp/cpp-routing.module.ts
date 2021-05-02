import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CppPage } from './cpp.page';

const routes: Routes = [
  {
    path: '',
    component: CppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CppPageRoutingModule {}
