import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', 
    children: [
      { path: 'google-apps', loadChildren: () => import('./google-apps/google-apps.module').then(m => m.GoogleAppsModule) },
      { path: '**', redirectTo: '/google-apps' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
