import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee';

@Pipe({
  name: 'activeUser'
})
export class ActiveUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value instanceof Array) {
      let result: Array<Employee> = new Array();
      for( let emp of value) {
        console.log(emp);
        // let employee: Employee = emp as Employee;
        let employee: Employee = new Employee(
          emp.name,
          emp.email,
          emp.job,
          emp.age,
          emp.enabled
        );
        console.log(employee);


        if (args) {
          // si se quiere utilizar un filtro boolean para decidir si se quiere filtrar activos o inactivos
          if (args.isActive == employee.isActive) {
            result.push(employee);
          }
        } else {
          // filtro sin parámetros, sólo devuelve los isActive==true
          if (employee.isActive) {
            result.push(employee);
          }
        }
      }
      return result;
    }
    return value;
  }

}
