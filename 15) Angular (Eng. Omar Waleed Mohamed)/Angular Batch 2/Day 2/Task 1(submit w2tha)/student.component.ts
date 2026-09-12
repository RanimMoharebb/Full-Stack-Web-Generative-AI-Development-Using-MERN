import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  students: string[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.students$.subscribe(data => {
      this.students = data;
    });
  }
}