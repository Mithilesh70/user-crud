import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTracker } from './goal-tracker';

describe('GoalTracker', () => {
  let component: GoalTracker;
  let fixture: ComponentFixture<GoalTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
