import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'students/create',
    pathMatch: 'full',
  },
  {
    path: 'students',
    loadChildren: () => import('./features/students/students.route').then((m) => m.STUDENT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
