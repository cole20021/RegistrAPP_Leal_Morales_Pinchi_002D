import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinescanerPageRoutingModule } from './finescaner-routing.module';

import { FinescanerPage } from './finescaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinescanerPageRoutingModule
  ],
  declarations: [FinescanerPage]
})
export class FinescanerPageModule {}
