import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBlogPageRoutingModule } from './view-blog-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { ViewBlogPage } from './view-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ViewBlogPageRoutingModule
  ],
  declarations: [ViewBlogPage]
})
export class ViewBlogPageModule {}
