import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { DeadlineTimerService } from './deadline-timer.service';
import { Observable, Subject, timer } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deadline-timer',
  templateUrl: './deadline-timer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class DeadlineTimer implements OnInit, OnDestroy {
  secondsLeft$!: Observable<number>;
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly timerService: DeadlineTimerService) {}

  ngOnInit(): void {
    this.secondsLeft$ = this.timerService.getSecondsLeft().pipe(
      switchMap(({ secondsLeft }) =>
        timer(0, 1000).pipe(
          map(i => Math.max(secondsLeft - i, 0)),
          takeUntil(this.destroy$)
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
