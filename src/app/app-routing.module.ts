import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

const appRoutes : Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'experience', loadChildren: './experience/experience.module#ExperienceModule' },
    { path: 'skills', loadChildren: './skills/skills.module#SkillsModule' }
  ]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
