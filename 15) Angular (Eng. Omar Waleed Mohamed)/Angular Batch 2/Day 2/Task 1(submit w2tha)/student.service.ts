import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students = new BehaviorSubject<string[]>([]);

  students$ = this.students.asObservable();

  addStudent(name: string) {
    const current = this.students.value; // الداتا الحالية
    this.students.next([...current, name]); // تحديث الداتا
  }
}