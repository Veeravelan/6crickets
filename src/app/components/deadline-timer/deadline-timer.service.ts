import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeadlineTimerService {
    constructor() { }

    //   getSecondsLeft(): Observable<{ secondsLeft: number }> {
    //     return this.http.get<{ secondsLeft: number }>('/api/deadline');
    //   }

    getSecondsLeft(): Observable<{ secondsLeft: number }> {
        return of({ secondsLeft: 12 });
    }
}
