import { Component, signal } from '@angular/core';
import { ClockFlap } from './clock-flap/clock-flap';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-clock',
  imports: [ClockFlap],
  templateUrl: './clock.html',
  styleUrl: './clock.scss',
})
export class Clock {
  hours = signal<number>(new Date().getHours());
  minutes = signal<number>(new Date().getMinutes());
  seconds = signal<number>(new Date().getSeconds());

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const now = new Date();

        this.hours.set(now.getHours());
        this.minutes.set(now.getMinutes());
        this.seconds.set(now.getSeconds());
      });
  }
}
