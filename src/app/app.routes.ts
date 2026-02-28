import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'goal-tracker',
    pathMatch: 'full',
  },
  {
    path: 'goal-tracker',
    loadComponent: () => import('./features/goal-tracker/goal-tracker').then((m) => m.GoalTracker),
  },
  {
    path: 'students',
    loadChildren: () => import('./features/students/students.route').then((m) => m.STUDENT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
