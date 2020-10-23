import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'live-watch',
    loadChildren: () => import('./pages/live-watch/live-watch.module').then( m => m.LiveWatchPageModule)
  },
  {
    path: 'bolg-news',
    loadChildren: () => import('./pages/bolg-news/bolg-news.module').then( m => m.BolgNewsPageModule)
  },
  {
    path: 'choose-amount',
    loadChildren: () => import('./pages/choose-amount/choose-amount.module').then( m => m.ChooseAmountPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'find-us',
    loadChildren: () => import('./pages/find-us/find-us.module').then( m => m.FindUsPageModule)
  },
  {
    path: 'weekly',
    loadChildren: () => import('./pages/weekly/weekly.module').then( m => m.WeeklyPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'view-blog',
    loadChildren: () => import('./pages/view-blog/view-blog.module').then( m => m.ViewBlogPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
