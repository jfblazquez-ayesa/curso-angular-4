import { Component, OnInit } from '@angular/core';
import { DummyEmployeeService } from '../../services/dummy-employee.service';
import { Employee } from '../../model/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  title: string;
  description: string;
  employees: Array<Employee>;
  activeEmployee: Employee;
  params: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dummyEmployee: DummyEmployeeService ) { 
    this.employees = dummyEmployee.getEmployees();
  }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params=>{
      console.log('entra en el suscriptor');
      console.log(params);
      // Busca el empleado por el id que nos llega de la ruta
      this.activeEmployee = this.employees.find(x => x.id === +params['id']); // (+) convierte la cadena en número
    });
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

  showEmployee(id: number) {
    // Navega hacia una ruta
    this.router.navigate(['routes', id]);
  }

}
