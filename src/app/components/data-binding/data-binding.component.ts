import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // data-binding por interpolación (Componente ---> Template) -> {{ description1 }}
  title1 :string = "Interpolación";
  description1 :string = "Ejemplo de data-binding por interpolación.";

  // property binding (Componente ---> Template)-> [href]="'mailto:' + user1.email" 
  // property binding (Componente ---> Template) (otra opción)->  bind-innerHTML="user1.name" 
  title2 :string = "Property binding";
  description2: string = "Ejemplo de property binding.";
  user1: any = {
    name: "Ricardo Fernández",
    email: "ricfer@gmail.com"
  };

  //event binding (Template ---> Componente) -> (click)="sumAction()"
  title3 :string = "Event binding";
  description3: string = "Ejemplo de event binding.";
  counter: number = 0;
  sumAction():void {
    this.counter++;
  }

  // Two-way binding (Template <---> Componente)  
  // EJ:
  // <input [value] = "valor" (keyUp)="onKeyUp()"/>
  // <input [(ngModel)] = "valor"/>
  title4 :string = "Two-way binding";
  description4: string = "Ejemplo de two-way binding (bi-direccional).";
  content: string = "Escribe aquí ...";

  
  constructor() { }

  ngOnInit() {
  }
   
  
}
