import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveWatchPageRoutingModule } from './live-watch-routing.module';

import { LiveWatchPage } from './live-watch.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LiveWatchPageRoutingModule
  ],
  declarations: [LiveWatchPage]
})
export class LiveWatchPageModule {}
