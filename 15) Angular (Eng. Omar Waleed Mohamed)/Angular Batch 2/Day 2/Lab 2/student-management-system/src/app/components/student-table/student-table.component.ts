import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html'
})
export class StudentTableComponent {

  @Input() students: Student[] = [];
  @Output() delete = new EventEmitter<number>();

  constructor(private router: Router) {}

  viewStudent(id: number) {
    this.router.navigate(['/student', id]);
  }

  deleteStudent(id: number) {
    this.delete.emit(id);
  }
}