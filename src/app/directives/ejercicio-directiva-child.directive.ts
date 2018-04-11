import { Directive, Input, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEjercicioDirectivaChild]'
})
export class EjercicioDirectivaChildDirective {

  @Input() appEjercicioDirectivaChild?: any;   // Debe tener el mismo nombre que el selector de la directiva
  // También podría usarse un alias para darle un nombre distinto a la variable:
  // @Input('appEjercicioDirectivaChild') message?: any;

  constructor(private el: ElementRef) { }

  doAction(): void {
    console.log(this.appEjercicioDirectivaChild);
    if (this.appEjercicioDirectivaChild == null || this.appEjercicioDirectivaChild == undefined || !this.appEjercicioDirectivaChild.type) {
      return;
    }

    let classes: string = "alert";

    switch (this.appEjercicioDirectivaChild.type) {
      case 'success':
        classes += " alert-success";
        break;
      case 'error':
        classes += " alert-danger";
        break;
      default:
        classes += " alert-" + this.appEjercicioDirectivaChild.type;
    }

    // Agrega el atributo class con las clases correspondientes en el elemento que
    // contiene la directiva
    this.el.nativeElement.setAttribute('class', classes);

    // Agrega el texto dentro del elemento que contiene la directiva
    this.el.nativeElement.innerHTML = this.appEjercicioDirectivaChild.msg;
  }

  ngOnInit() {
    this.doAction();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Detecta si se ha producido algún cambio en la variable de entrada
    if (changes) {
      console.log(changes);
      this.appEjercicioDirectivaChild = changes.appEjercicioDirectivaChild.currentValue;
      this.doAction();
    }
  }

}
