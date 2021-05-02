import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegexPage } from './regex.page';

const routes: Routes = [
  {
    path: '',
    component: RegexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegexPageRoutingModule {}
