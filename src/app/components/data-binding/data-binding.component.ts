import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  ejemplo1: string = "ejemplo de data-binding por interpolación";
  ejemplo2: any = {
    name: "dxfhgcjvn",
    email: "dxghj@ghjkl.com"
  };

  //Ejemplo event binding
  counter: number = 0;
  sumaAction():void{
    this.counter++;
  }

  constructor() { }

  ngOnInit() {
  }

}
