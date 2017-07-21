import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'gs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {

  }

  collapse(){
    if ( $('.navbar-collapse').hasClass('in') ) {
      $('.navbar-toggle').click();
    }

  }



}
