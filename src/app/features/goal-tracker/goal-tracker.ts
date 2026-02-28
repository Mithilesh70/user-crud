import { Component } from '@angular/core';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-goal-tracker',
  imports: [Clock],
  templateUrl: './goal-tracker.html',
  styleUrl: './goal-tracker.scss',
})
export class GoalTracker {}
