import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent {

  students$ = this.studentsService.getStudents();

  constructor(private studentsService: StudentsService) {}

  deleteStudent(id: number) {
    this.studentsService.deleteStudent(id);
  }
}