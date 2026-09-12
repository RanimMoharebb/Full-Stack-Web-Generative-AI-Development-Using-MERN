import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  name: string = '';

  constructor(private studentService: StudentService) {}

  add() {
    this.studentService.addStudent(this.name);
    this.name = '';
  }
}