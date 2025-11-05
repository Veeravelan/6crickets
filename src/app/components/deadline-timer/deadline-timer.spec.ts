import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineTimer } from './deadline-timer';

describe('DeadlineTimer', () => {
  let component: DeadlineTimer;
  let fixture: ComponentFixture<DeadlineTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineTimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
