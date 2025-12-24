import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Student } from '../../../../core/models/student.model';
import { StudentService } from '../../../../core/services/student.service';

@Component({
  selector: 'app-student-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './student-form.html',
  styleUrl: './student-form.scss',
})
export class StudentForm implements OnInit {
  @Input() student?: Student;
  @Output() submitStudent = new EventEmitter<Student>();

  courses = ['Angular', 'React', 'Vue'];
  skillsList = ['HTML', 'CSS', 'JavaScript', 'Angular'];

  form!: FormGroup;

  constructor(private fb: FormBuilder, public s: StudentService) {}

  ngOnInit(): void {
    this.initForm();

    if (this.student) {
      this.form.patchValue(this.student);
    }
  }

  private initForm(): void {
    this.form = this.fb.nonNullable.group({
      id: [0],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      gender: ['male', Validators.required],
      course: ['', Validators.required],
      skills: this.fb.nonNullable.control<string[]>([]),
      agree: [false, Validators.requiredTrue],
    });
  }

  toggleSkill(skill: string): void {
    const skills = this.form.controls['skills'].value;
    this.form.controls['skills'].setValue(
      skills.includes(skill) ? skills.filter((s: any) => s !== skill) : [...skills, skill]
    );
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.submitStudent.emit({
      id: Date.now(),
      ...this.form.getRawValue(),
    });
    this.form.reset();
  }

  isSkillSelected(skill: string): boolean {
    return this.form.controls['skills'].value.includes(skill);
  }
}
