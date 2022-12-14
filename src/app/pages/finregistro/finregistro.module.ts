import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinregistroPageRoutingModule } from './finregistro-routing.module';

import { FinregistroPage } from './finregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinregistroPageRoutingModule
  ],
  declarations: [FinregistroPage]
})
export class FinregistroPageModule {}
