import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockFlap } from './clock-flap';

describe('ClockFlap', () => {
  let component: ClockFlap;
  let fixture: ComponentFixture<ClockFlap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockFlap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockFlap);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('numberToDisplay', 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
