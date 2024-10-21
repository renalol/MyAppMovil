import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadDosPage } from './actividad-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadDosPageRoutingModule {}
