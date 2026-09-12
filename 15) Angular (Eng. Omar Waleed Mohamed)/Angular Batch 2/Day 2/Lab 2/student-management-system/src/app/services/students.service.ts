import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsData: Student[] = [
    {
      id: 1,
      firstName: "Ali",
      lastName: "Hassan",
      age: 21,
      gender: "Male",
      email: "ali@email.com",
      phone: "01000000000",
      address: "12 Main Street",
      city: "Cairo",
      country: "Egypt",
      department: "Computer Science",
      level: 3,
      GPA: 3.2,
      enrollmentDate: "2023-09-01",
      isActive: true
    }
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.studentsData);
  students$ = this.studentsSubject.asObservable();

  getStudents() {
    return this.students$;
  }

  getStudentById(id: number) {
    return this.studentsData.find(s => s.id === id);
  }

  addStudent(student: Student) {
    student.id = this.studentsData.length + 1;
    this.studentsData.push(student);
    this.studentsSubject.next(this.studentsData);
  }

  deleteStudent(id: number) {
    this.studentsData = this.studentsData.filter(s => s.id !== id);
    this.studentsSubject.next(this.studentsData);
  }
}