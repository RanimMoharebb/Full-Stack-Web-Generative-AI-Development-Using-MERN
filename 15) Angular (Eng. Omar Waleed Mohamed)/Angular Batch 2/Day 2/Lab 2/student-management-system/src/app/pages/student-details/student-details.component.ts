import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit {

  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private service: StudentsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.service.getStudentById(id);
  }
}