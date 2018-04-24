import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';
import { SimpleMessageDirective } from '../../directives/simple-message.directive';
import { Contact } from '../../model/contact';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  
  //definimos el servicio para inyectar en este constructor:
  //,providers: [AgendaService]
  // si queremos que la instancia no se destruya con el componente, 
  // hemos de declarar el provider a nivel de módulo app.module.ts (en lugar de hacerlo a nivel de componente)
})
export class ParentComponent implements OnInit {

  title: string = 'Comunicación padre e hijo';
  parentVariable: string = 'Yo soy tu padre  XXXXSSSSHHH';
  childComponentVar: string;

  @ViewChild(Child2Component) child: Child2Component;
  @ViewChildren(Child2Component) listaDeChild: QueryList<Child2Component>;
  @ViewChild('mensaje') mensaje: ElementRef;
  @ViewChild('mensaje', {read: SimpleMessageDirective}) mensajeConDirectiva: SimpleMessageDirective;
  @ViewChild('otraEtiqueta', {read: SimpleMessageDirective}) otraEtiquetaConDirectiva: SimpleMessageDirective;

  @ViewChild(Child2Component) eChild: ChildComponent;

  contact: Contact = new Contact('','');
  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
  }

  getChildVar(evento) {
    this.childComponentVar = evento;
  }

  sumaTodos() {
    this.listaDeChild.forEach(child2 => {
      child2.suma();
    });
  }

  nuevoContacto(formulario){
    this.agendaService.addContact(this.contact);

    this.contact=new Contact('','');
    formulario.form.reset;
  }

}
