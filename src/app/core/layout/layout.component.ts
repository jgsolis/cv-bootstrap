import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-layout',
  template: `
    <gs-header></gs-header>
    <gs-content></gs-content>
  `
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
