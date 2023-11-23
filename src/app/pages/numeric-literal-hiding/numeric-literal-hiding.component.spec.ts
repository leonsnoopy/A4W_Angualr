import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericLiteralHidingComponent } from './numeric-literal-hiding.component';

describe('NumericLiteralHidingComponent', () => {
  let component: NumericLiteralHidingComponent;
  let fixture: ComponentFixture<NumericLiteralHidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericLiteralHidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericLiteralHidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
