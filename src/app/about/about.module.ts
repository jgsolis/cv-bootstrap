import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
