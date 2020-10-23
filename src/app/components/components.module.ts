import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { LoadingComponent } from './loading/loading.component';
import { PipesModule } from '../pipes/pipes.module';
import { HtmlComponent } from './html/html.component';

import { EmptyComponent } from './empty/empty.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BackbuttonComponent,
    LoadingComponent,
    HtmlComponent,

    EmptyComponent,

  ],
  exports: [
    BackbuttonComponent,
    LoadingComponent,
    HtmlComponent,
    EmptyComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
