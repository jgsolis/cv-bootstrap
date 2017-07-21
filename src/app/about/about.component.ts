import { Component } from '@angular/core';

import { slideRightAnimation } from '../shared/animations/slide-right.animation';

@Component({
  selector: 'gs-about',
  templateUrl: './about.component.html',
  animations: [ slideRightAnimation ]
})
export class AboutComponent {

  routeAnimation : boolean = true;
  aboutImage     : string  = 'assets/img/ninja-min.png';

  constructor() { }

}
