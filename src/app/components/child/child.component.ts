import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() parentComponentVar: string;
  @Output() childEvent:EventEmitter<string> = new EventEmitter();
  @Output() childEvent2:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.childEvent.emit('papaaarrr papaarrrr! llévame al ssiircoooo');
  }

  emiteChildEvent2(msg:string){
    this.childEvent.emit(msg);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes){
      this.parentComponentVar = changes.parentComponentVar.currentValue;
    }
  }

}
