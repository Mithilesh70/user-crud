import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private _students = signal<Student[]>([]);

  students = this._students.asReadonly();

  addStudent(student: Student) {
    this._students.update((list) => [...list, student]);
  }

  deleteStudent(id: number) {
    this._students.update((list) => list.filter((s) => s.id !== id));
  }

  updateStudent(updated: Student) {
    this._students.update((list) => list.map((s) => (s.id === updated.id ? updated : s)));
  }

  getStudentById(id: number) {
    return this._students().find((s) => s.id === id);
  }
}
