import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee';
import { DummyEmployeeService } from '../../services/dummy-employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-child',
  templateUrl: './routing-child.component.html',
  styleUrls: ['./routing-child.component.css']
})
export class RoutingChildComponent implements OnInit {

  title: string;
  description: string;
  activeEmployee: Employee;
  employees: Array<Employee>;
  params: any;
    
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dummyEmployee: DummyEmployeeService) { 
      this.employees = dummyEmployee.getEmployees();
    }

  ngOnInit() {
    this.params = this.activatedRoute.parent.params.subscribe(params=>{
      console.log('entra en el suscriptor');
      console.log(params);
      // Busca el empleado por el id que nos llega de la ruta
      this.activeEmployee = this.employees.find(x => x.id === +params['id']); // (+) convierte la cadena en número
    });
  }

}
