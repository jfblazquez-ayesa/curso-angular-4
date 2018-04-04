import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSimpleMessage]'
})
export class SimpleMessageDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.setAttribute('class', 'alert alert-info');
    this.el.nativeElement.innerHTML= 'Mi primerita directiva angular';
  }

}
