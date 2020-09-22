import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [VideosComponent, HomeComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
