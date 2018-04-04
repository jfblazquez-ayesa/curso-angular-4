import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Employee } from '../../model/employee'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  title :string;
  description :string;
  jobs :Array<string>;
  employee: Employee;

  constructor() {
    this.title = "Creación de un formulario";
    this.description = "Ejemplo de la creación de un formulario.";
    this.jobs = ['Project Manager', 'Programmer', 'Designer'];
    this.employee = new Employee('Pedro','sdfgh@fghjk.com');
  }

  envioFormulario(formulario: NgForm){ // se puede omitir el tipo, o poner : any, pero poniendo NgForm tengo la posibilidad de autocompletado
    console.log(formulario);
  }

  ngOnInit() {
  }

}
