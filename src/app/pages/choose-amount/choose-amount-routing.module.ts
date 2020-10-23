import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseAmountPage } from './choose-amount.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseAmountPageRoutingModule {}
