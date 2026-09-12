import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  childData: any;

  receiveData(data: any) {
    this.childData = data;
  }
}