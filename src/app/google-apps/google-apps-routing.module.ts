import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleAppsComponent } from './google-apps.component';

const appRoutes: Routes = [
  { path: '', component: GoogleAppsComponent }, 
  { path: 'google-apps/videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class GoogleAppsRoutingModule { }
