import { Routes } from '@angular/router';
import { CreateStudent } from './pages/create-student/create-student';
import { StudentList } from './pages/student-list/student-list';

export const STUDENT_ROUTES: Routes = [
  {
    path: 'create',
    component: CreateStudent,
  },
  { path: 'edit/:id', component: CreateStudent },
  { path: 'list', component: StudentList },
];
