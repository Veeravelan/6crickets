import { Component, signal } from '@angular/core';
import { DeadlineTimer } from './components/deadline-timer/deadline-timer';
import { SoftwareCamera } from './components/software-camera/software-camera';

@Component({
  selector: 'app-root',
  imports: [DeadlineTimer, SoftwareCamera],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('deadline-timer');
  cardTitle = "Reusable card";
}
