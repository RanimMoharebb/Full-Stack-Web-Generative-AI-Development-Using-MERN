import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {

  student = {
    firstName: '',
    lastName: '',
    age: 0,
    department: '',
    email: '',
    phone: '',
    GPA: 0
  };

  constructor(private studentsService: StudentsService) {}

  addStudent() {
    this.studentsService.addStudent({
      ...this.student,
      id: 0,
      gender: '',
      address: '',
      city: '',
      country: '',
      level: 1,
      enrollmentDate: new Date().toISOString(),
      isActive: true
    });

    alert("Student Added!");
  }
}