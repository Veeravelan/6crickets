import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCamera } from './software-camera';

describe('SoftwareCamera', () => {
  let component: SoftwareCamera;
  let fixture: ComponentFixture<SoftwareCamera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCamera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareCamera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
