import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-directiva-parent',
  templateUrl: './ejercicio-directiva-parent.component.html',
  styleUrls: ['./ejercicio-directiva-parent.component.css']
})
export class EjercicioDirectivaParentComponent implements OnInit {
  title = 'Ejercicio: Crear directiva alertMessage';
  // tslint:disable-next-line:max-line-length
  description = 'Crear una directiva, que aplicada a un div permita imprimir un mensaje que reciba del componente padre.\n  Además del mensaje, también recibirá el estado del mensaje: Información, Aviso (Warning) y Error, aplicándose el estilo que corresponda según su estado.\n  Por último, la directiva también permitirá cerrar el mensaje mediante un botón \'Cerrar\', avisando al componente padre cuando se produzca este evento (solo es necesario capturar el evento en el padre e imprimir el aviso \'El mensaje se cerró\' por consola).';
  lista: Array<string> = ['info', 'warning', 'error', 'success'];
  variable: any = { msg: 'mensaje', type: 'info' };
  campo: string;

  constructor() {}

  changeType(type) {
    console.log(type);
    // this.variable.type=type; //Si cambio únicamente un atributo del objeto, el método OnChanges NO SE INVOCA
    this.variable = { msg: this.variable.msg, type: type };
  }

  setVariableMsg(obj: any) {
    console.log(obj.value);
    //Si cambio únicamente un atributo del objeto, el método OnChanges NO SE INVOCA
    this.variable = { msg: obj.value, type: this.variable.type };
  }

  ngOnInit() {}
}
