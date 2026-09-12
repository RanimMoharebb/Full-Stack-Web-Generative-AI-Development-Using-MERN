import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  
  @Output() outputMessage = new EventEmitter<string>();

  sendData(value: string) {
    this.outputMessage.emit(value);
  }
}