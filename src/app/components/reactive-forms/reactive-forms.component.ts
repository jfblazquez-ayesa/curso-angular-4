import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Employee } from '../../model/employee'

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  title: string;
  description: string;
  employee: Employee;
  jobs: Array<string>;
  employeeFormGroup: FormGroup;

  constructor() {
    this.title = "Creación de un formulario reactivo";
    this.description = "Ejemplo de la creación de un formulario reactivo.";
    this.jobs = ['Project Manager', 'Programmer', 'Designer'];
    this.employee = new Employee('', '');
  }

  ngOnInit() {
    this.employeeFormGroup = new FormGroup({
      name: new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.employee.email, [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
        Validators.minLength(4),
        this.forbiddenEmailValidator
      ]),
      job: new FormControl(this.employee.job),
      isActive: new FormControl(this.employee.isActive)
    });
    this.employeeFormGroup.valueChanges.subscribe(
      value => {this.suscriptorObservableChange(this, value)},
      err => {this.suscriptorObservableError(this,err)},
      () => {this.suscriptorObservableComplete(this)});
  }

  suscriptorObservableChange(obj,value) {
    // se ha producido un cambio
    console.log(value);
    // Esto hace una especie de casting, pero si la clase Employee tuviera métodos, con esta asignación no serían accesibles
    //obj.employee = value as Employee;
    if (!obj.employeeFormGroup.valid) {
      return;
    }
    obj.employee = new Employee(
      value.name,
      value.email,
      value.job,
      value.age,
      value.isActive
    );
  }
  suscriptorObservableError(obj,err) {
    // se ha producido un error
    console.error(err);
  }
  suscriptorObservableComplete(obj) {
    // se ha finalizado
  }

  forbiddenEmailValidator(email:FormControl){
    // emails prohibidos
    let forbbidenEmails: Array<string> = ['asdf@asdf.com', 'qwerty@qwerty.com', 'zxcv@zxcv.com'];

    if (forbbidenEmails.indexOf(email.value) != -1){
      return {
        'invalid': true
      };
    }
    return null;
  }

}
