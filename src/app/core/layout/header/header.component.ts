import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType, ResponseType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as FileSaver from 'file-saver';
declare var $:any;

@Component({
  selector: 'gs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private http : Http) { }

  ngOnInit() {

  }

  collapse(){
    if ( $('.navbar-collapse').hasClass('in') ) {
      $('.navbar-toggle').click();
    }

  }

  download( file : string ) {
    const lang = ( file === 'pdf_eng' || file === 'word_eng' )? 'ENG' : 'ESP';
    const ext  = ( file === 'pdf_eng' || file === 'pdf_esp' )? 'pdf' : 'doc';
    const type = ( file === 'pdf_eng' || file === 'pdf_esp' )? 'pdf' : 'msword';

    return this.http.get(`/files/CV_${lang}/${file}.${ext}`,
                         { responseType: ResponseContentType.Blob })
    .map((res) => res.blob())
    .subscribe(
      data => {
          //console.log(data);
          let blob = new Blob([data], {type: `application/${type}`});
          //console.log(blob);
          FileSaver.saveAs(blob, `Jose_Gildardo_Solis_Sanchez_CV_${lang}.${ext}`);

      },
      err => console.error(err)
    );
  }


}
