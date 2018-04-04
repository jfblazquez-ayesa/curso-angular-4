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

  employee: Employee;
  employeeFormGroup: FormGroup;

  constructor() {
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
        Validators.minLength(4)
      ]),
      job: new FormControl(this.employee.job),
      isActive: new FormControl(this.employee.isActive)
    });
  }

}
