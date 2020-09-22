import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';

const videoRoutes: Routes = [
  { path: '', component: VideosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(videoRoutes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
