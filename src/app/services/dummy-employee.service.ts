import { Employee } from "../model/employee";

// import { Injectable } from '@angular/core';

// @Injectable()
export class DummyEmployeeService {

  constructor() { }

  getEmployees(): Array<Employee>{
    return [
      {
        id: 1,
        name: "Sergio Rodríguez",
        email: 'zxcv@wer.com'
      },
      {
        id: 2,
        name: "Ángela Pérez",
        email: 'qwer@wer.com'
      },
      {
        id: 3,
        name: "Rafael Fernández",
        email: 'asdf@wer.com'
      }
    ]
  }

}
