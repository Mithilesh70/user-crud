import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { StudentService } from '../../../../core/services/student.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TruncatePipe } from '../../../../shared/truncate.pipe';

@Component({
  selector: 'app-student-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    TruncatePipe,
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {
  displayedColumns = ['name', 'email', 'gender', 'course', 'skills', 'actions'];

  students = computed(() => this.studentService.students());

  constructor(private studentService: StudentService, private router: Router) {}

  delete(id: number): void {
    this.studentService.deleteStudent(id);
  }

  edit(id: number): void {
    this.router.navigate(['/students/edit', id]);
  }

  goToCreate(): void {
    this.router.navigate(['/students/create']);
  }
}
