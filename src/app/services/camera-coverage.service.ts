import { Injectable } from '@angular/core';

export interface Range {
  min: number;
  max: number;
}

export interface HardwareCamera {
  subjectDistanceRange: Range;
  lightLevelRange: Range;
}

export interface DesiredCoverage {
  subjectDistanceRange: Range;
  lightLevelRange: Range;
}

@Injectable({ providedIn: 'root' })
export class CameraCoverageService {
  isCoverageSufficient(desired: DesiredCoverage, cameras: HardwareCamera[]): boolean {
    return (
      this.isRangeFullyCovered(
        desired.subjectDistanceRange,
        cameras.map(c => c.subjectDistanceRange)
      ) &&
      this.isRangeFullyCovered(
        desired.lightLevelRange,
        cameras.map(c => c.lightLevelRange)
      )
    );
  }

  private isRangeFullyCovered(target: Range, ranges: Range[]): boolean {
    // Only consider ranges that overlap with the target
    const relevantRanges = ranges
      .filter(({ min, max }) => max >= target.min && min <= target.max)
      .sort((a, b) => a.min - b.min);

    let coveredUntil = target.min;

    for (const { min, max } of relevantRanges) {
      // target not fully covered
      if (min > coveredUntil) return false;

      // Extend the coverage
      coveredUntil = Math.max(coveredUntil, max);

      // Target fully covered
      if (coveredUntil >= target.max) return true;
    }

    // After processing all ranges, check final coverage
    return coveredUntil >= target.max;
  }
}
