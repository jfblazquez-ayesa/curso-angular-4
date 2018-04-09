import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  public employees: Array<any>;

  constructor() {
    this.employees = [
      {
        id: 1,
        name: "Sergio Rodríguez",
        enabled: true
      },
      {
        id: 2,
        name: "Ángela Pérez",
        enabled: false
      },
      {
        id: 3,
        name: "Rafael Fernández",
        enabled: true
      }
    ];
  }

  ngOnInit() {
  }

}
