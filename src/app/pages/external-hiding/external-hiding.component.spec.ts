import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalHidingComponent } from './external-hiding.component';

describe('ExternalHidingComponent', () => {
  let component: ExternalHidingComponent;
  let fixture: ComponentFixture<ExternalHidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalHidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalHidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
