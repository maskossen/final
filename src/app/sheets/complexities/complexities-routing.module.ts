import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplexitiesPage } from './complexities.page';

const routes: Routes = [
  {
    path: '',
    component: ComplexitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplexitiesPageRoutingModule {}
