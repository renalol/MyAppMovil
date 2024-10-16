import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Act1PageRoutingModule } from './act-1-routing.module';

import { Act1Page } from './act-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Act1PageRoutingModule
  ],
  declarations: [Act1Page]
})
export class Act1PageModule {}
