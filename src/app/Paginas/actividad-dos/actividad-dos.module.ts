import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadDosPageRoutingModule } from './actividad-dos-routing.module';

import { ActividadDosPage } from './actividad-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadDosPageRoutingModule
  ],
  declarations: [ActividadDosPage]
})
export class ActividadDosPageModule {}
