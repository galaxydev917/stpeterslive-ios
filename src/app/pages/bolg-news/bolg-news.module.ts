import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolgNewsPageRoutingModule } from './bolg-news-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { BolgNewsPage } from './bolg-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BolgNewsPageRoutingModule
  ],
  declarations: [BolgNewsPage]
})
export class BolgNewsPageModule {}
