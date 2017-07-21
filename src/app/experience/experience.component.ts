import { Component } from '@angular/core';

import { slideRightAnimation } from '../shared/animations/slide-right.animation';

@Component({
  selector: 'gs-experience',
  templateUrl: './experience.component.html',
  animations: [ slideRightAnimation ]
})
export class ExperienceComponent {

  routeAnimation : boolean = true;

  constructor() { }

}
