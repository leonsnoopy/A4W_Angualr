import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugDetectionComponent } from './debug-detection.component';

describe('DebugDetectionComponent', () => {
  let component: DebugDetectionComponent;
  let fixture: ComponentFixture<DebugDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
