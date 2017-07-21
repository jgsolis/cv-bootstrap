import { NgModule } from '@angular/core';

import { ExperienceRoutingModule } from './experience-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  imports: [
    ExperienceRoutingModule,
    SharedModule
  ],
  declarations: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
