import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContorlFlowFlatteningComponent } from './contorl-flow-flattening.component';

describe('ContorlFlowFlatteningComponent', () => {
  let component: ContorlFlowFlatteningComponent;
  let fixture: ComponentFixture<ContorlFlowFlatteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContorlFlowFlatteningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContorlFlowFlatteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
