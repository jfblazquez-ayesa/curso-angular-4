import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';
import { SimpleMessageDirective } from '../../directives/simple-message.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentVariable: string = "Yo soy tu padre  XXXXSSSSHHH"
  childComponentVar: string;

  @ViewChild(Child2Component) child: Child2Component;
  @ViewChildren(Child2Component) listaDeChild: QueryList<Child2Component>;
  @ViewChild('mensaje') mensaje: ElementRef;
  @ViewChild('mensaje', {read: SimpleMessageDirective}) mensajeConDirectiva: SimpleMessageDirective;
  @ViewChild('otraEtiqueta', {read: SimpleMessageDirective}) otraEtiquetaConDirectiva: SimpleMessageDirective;
  constructor() { }

  ngOnInit() {
  }

  getChildVar(evento) {
    this.childComponentVar = evento;
  }

  sumaTodos(){
    this.listaDeChild.forEach(child2 => {
      child2.suma();
    });
  }

}
