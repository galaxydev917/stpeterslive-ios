import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyPageRoutingModule } from './weekly-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { WeeklyPage } from './weekly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WeeklyPageRoutingModule
  ],
  declarations: [WeeklyPage]
})
export class WeeklyPageModule {}
