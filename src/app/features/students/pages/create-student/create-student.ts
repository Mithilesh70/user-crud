import { Component } from '@angular/core';
import { StudentForm } from '../../components/student-form/student-form';
import { Student } from '../../../../core/models/student.model';
import { StudentService } from '../../../../core/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-student',
  imports: [StudentForm, MatButtonModule],
  templateUrl: './create-student.html',
  styleUrl: './create-student.scss',
})
export class CreateStudent {
  isEditMode = false;
  selectedStudent?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.isEditMode = true;
      this.selectedStudent = this.studentService.getStudentById(id);
    }
  }

  onSubmit(student: Student): void {
    if (this.isEditMode) {
      this.studentService.updateStudent({
        ...student,
        id: this.selectedStudent!.id,
      });
    } else {
      this.studentService.addStudent({
        ...student,
        id: Date.now(),
      });
    }

    this.router.navigate(['/students/list']);
  }

  goToList(): void {
    this.router.navigate(['/students/list']);
  }
}
