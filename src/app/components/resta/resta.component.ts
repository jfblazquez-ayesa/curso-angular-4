import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
// import {ContentChild, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  @ContentChild(Child2Component) child: Child2Component;
  @ContentChildren(Child2Component) children: QueryList<Child2Component>;

  constructor() { }

  ngOnInit() {
  }

  restaTodos() {
    this.children.forEach(child2 => {
      child2.resta();
    });
  }
}
