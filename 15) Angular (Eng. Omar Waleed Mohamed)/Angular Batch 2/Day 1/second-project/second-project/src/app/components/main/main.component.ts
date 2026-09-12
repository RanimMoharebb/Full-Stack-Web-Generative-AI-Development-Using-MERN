
import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  //  Binding ( One Way Binding , Two Way Binding )




  name: string = "Yahia Elkosh !"
  imgurl: string = "assets/img.png"
  data: string = ''
  isLogged: boolean = true
  friends: User[] = [
    { name: "Amr", age: 23, id: 23432 },
    { name: "Marry", age: 30, id: 2345 },
    { name: "Salah", age: 30, id: 246 },
    { name: "Yara", age: 30, id: 678 },
    { name: "Omar", age: 30, id: 78976 },
    { name: "Hazem", age: 30, id: 345 },
  ]


  status:string = ""



  sayHi() {
    alert("Hei Today!");

  }
}
