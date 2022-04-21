import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookDetectionComponent } from './hook-detection.component';

describe('HookDetectionComponent', () => {
  let component: HookDetectionComponent;
  let fixture: ComponentFixture<HookDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HookDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
