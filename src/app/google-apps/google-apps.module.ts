import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleAppsRoutingModule } from './google-apps-routing.module';
import { GoogleAppsComponent } from './google-apps.component';


@NgModule({
  declarations: [GoogleAppsComponent],
  imports: [
    CommonModule,
    GoogleAppsRoutingModule
  ]
})
export class GoogleAppsModule { }
