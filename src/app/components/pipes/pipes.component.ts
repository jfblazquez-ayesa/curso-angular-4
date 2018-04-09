import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { StripHtmlPipe } from "../../pipes/strip-html.pipe";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [DatePipe, StripHtmlPipe]
})
export class PipesComponent implements OnInit {

  birthdate: Date;
  dummytext:string;
  HTMLtext:string;
  ejercicio1Text:string;
  ejercicio1Length:number;
  ejercicio1Ellipsis:boolean;
  constructor(private stripHtmlPipe: StripHtmlPipe, private datePipe: DatePipe) {
    this.birthdate = new Date(1984,0,20); // 20/01/1984, el mes empieza en 0
    this.dummytext = 'fehgwryDFGFOIJ5yj'
    this.HTMLtext = '<div class="panel panel-default">HOLAAAAAAA</div>'
    this.ejercicio1Text = '1234567890';
    this.ejercicio1Length =5;
    this.ejercicio1Ellipsis=false;
  }

  ngOnInit() {
    // console.log(this.stripHtmlPipe.transform(this.HTMLtext));
    // console.log(this.datePipe.transform(this.birthdate, 'dd-MM-yyyy'));

  }

}
