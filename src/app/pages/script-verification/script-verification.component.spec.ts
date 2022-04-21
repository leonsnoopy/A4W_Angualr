import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptVerificationComponent } from './script-verification.component';

describe('ScriptVerificationComponent', () => {
  let component: ScriptVerificationComponent;
  let fixture: ComponentFixture<ScriptVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
