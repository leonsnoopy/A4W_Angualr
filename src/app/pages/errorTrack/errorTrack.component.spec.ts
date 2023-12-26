import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTrackComponent } from './errorTrack.component';

describe('ErrorTrackComponent', () => {
  let component: ErrorTrackComponent;
  let fixture: ComponentFixture<ErrorTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
