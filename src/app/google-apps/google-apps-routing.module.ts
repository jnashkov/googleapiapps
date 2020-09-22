import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleAppsComponent } from './google-apps.component';
import { VideosComponent } from './videos/videos.component';

const appRoutes: Routes = [
  { path: '', 
    component: GoogleAppsComponent, 
    children: [
      { path: '', redirectTo: 'videos', pathMatch: 'full' },
      { path: 'videos', component: VideosComponent },
      { path: '**', component: VideosComponent }
    ]
  }, 
  { path: 'google-apps/videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class GoogleAppsRoutingModule { }
