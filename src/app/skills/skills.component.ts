import { Component } from '@angular/core';

import { slideRightAnimation } from '../shared/animations/slide-right.animation';

@Component({
  selector: 'gs-skills',
  templateUrl: './skills.component.html',
  animations: [ slideRightAnimation ]
})
export class SkillsComponent {

  routeAnimation : boolean = true;
  skills : any = {
    php: false,
    java: false,
    javascript: false,
    postgresql: false,
    mysql: false,
    mongodb: false,
    mssql: false,
    nodejs: false,
    typescript: false,
    angular: false,
    html: false,
    css: false,
    sass: false,
    gulp: false,
    bootstrap: false,
    semantic: false,
    jquery: false,
    jqueryui: false,
    laravel: false,
    codeigniter: false,
    slim: false,
    phalcon: false,
    git: false,
    github: false
  };

  constructor() { }

  showBar( skill : string ) : void {
    for(let item in this.skills) {
      if ( item.toString() === skill ) {
        this.skills[item] = true;
      }
      else {
        this.skills[item] = false;
      }
    }
  }

}
