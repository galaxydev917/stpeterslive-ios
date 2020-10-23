import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAmountPageRoutingModule } from './choose-amount-routing.module';

import { ChooseAmountPage } from './choose-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ChooseAmountPageRoutingModule
  ],
  declarations: [ChooseAmountPage]
})
export class ChooseAmountPageModule {}
