import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSimpleMessage]'
})
export class SimpleMessageDirective {

  text:string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.setAttribute('class', 'alert alert-info');
    this.el.nativeElement.innerHTML= this.text;
  }

}
