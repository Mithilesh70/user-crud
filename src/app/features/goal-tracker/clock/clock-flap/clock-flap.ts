import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-clock-flap',
  imports: [],
  templateUrl: './clock-flap.html',
  styleUrl: './clock-flap.scss',
})
export class ClockFlap {
  numberToDisplay = input.required<number>();
  leftDigit = signal('0');
  rightDigit = signal('0');

  prevLeft = signal('0');
  prevRight = signal('0');

  // used to toggle animation class
  animateLeft = signal(false);
  animateRight = signal(false);
  private leftResetTimer: ReturnType<typeof setTimeout> | null = null;
  private rightResetTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly animationDurationMs = 520;

  constructor() {
    effect(() => {
      const value = this.numberToDisplay();

      const formatted = value.toString().padStart(2, '0');
      const [newLeft, newRight] = formatted;

      // LEFT
      if (newLeft !== this.leftDigit()) {
        this.prevLeft.set(this.leftDigit());
        this.leftDigit.set(newLeft);

        this.animateLeft.set(false);
        queueMicrotask(() => {
          this.animateLeft.set(true);
          if (this.leftResetTimer) {
            clearTimeout(this.leftResetTimer);
          }
          this.leftResetTimer = setTimeout(() => {
            this.animateLeft.set(false);
          }, this.animationDurationMs);
        });
      }

      // RIGHT
      if (newRight !== this.rightDigit()) {
        this.prevRight.set(this.rightDigit());
        this.rightDigit.set(newRight);

        this.animateRight.set(false);
        queueMicrotask(() => {
          this.animateRight.set(true);
          if (this.rightResetTimer) {
            clearTimeout(this.rightResetTimer);
          }
          this.rightResetTimer = setTimeout(() => {
            this.animateRight.set(false);
          }, this.animationDurationMs);
        });
      }
    });
  }
}
