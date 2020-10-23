import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveWatchPage } from './live-watch.page';

const routes: Routes = [
  {
    path: '',
    component: LiveWatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveWatchPageRoutingModule {}
