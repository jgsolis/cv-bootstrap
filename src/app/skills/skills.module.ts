import { NgModule } from '@angular/core';

import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SkillsComponent } from './skills.component';

@NgModule({
  imports: [
    SkillsRoutingModule,
    SharedModule
  ],
  declarations: [
    SkillsComponent
  ]
})
export class SkillsModule { }
