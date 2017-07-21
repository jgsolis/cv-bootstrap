import { Component } from '@angular/core';

import { slideRightAnimation } from '../shared/animations/slide-right.animation';

@Component({
  selector: 'gs-home',
  templateUrl: './home.component.html',
  animations: [ slideRightAnimation ]
})
export class HomeComponent {

  routeAnimation : boolean = true;
  personalImage  : string  = 'assets/img/me-min.jpeg';

  constructor() { }

}
