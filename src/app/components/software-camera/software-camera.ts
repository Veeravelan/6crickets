import { Component, OnInit } from '@angular/core';
import { DesiredCoverage, HardwareCamera, CameraCoverageService } from '../../services/camera-coverage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-software-camera',
  imports: [CommonModule],
  templateUrl: './software-camera.html',
  styleUrl: './software-camera.scss'
})
export class SoftwareCamera implements OnInit {
  desired: DesiredCoverage = {
    subjectDistanceRange: { min: 1, max: 10 },
    lightLevelRange: { min: 100, max: 1000 }
  };

  cameras: HardwareCamera[] = [
    { subjectDistanceRange: { min: 1, max: 4 }, lightLevelRange: { min: 100, max: 400 } },
    { subjectDistanceRange: { min: 3, max: 7 }, lightLevelRange: { min: 350, max: 700 } },
    { subjectDistanceRange: { min: 6, max: 10 }, lightLevelRange: { min: 600, max: 1000 } }
  ];

  isSufficient: boolean = false;

  constructor(private readonly coverageService: CameraCoverageService) { }

  ngOnInit() {
    this.isSufficient = this.coverageService.isCoverageSufficient(this.desired, this.cameras);
  }
}
