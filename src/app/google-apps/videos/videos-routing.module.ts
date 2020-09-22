import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';
import { HomeComponent } from './home/home.component';

const videoRoutes: Routes = [
  { path: '', component: VideosComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(videoRoutes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
