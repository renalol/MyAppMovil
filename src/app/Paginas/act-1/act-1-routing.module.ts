import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Act1Page } from './act-1.page';

const routes: Routes = [
  {
    path: '',
    component: Act1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Act1PageRoutingModule {}
