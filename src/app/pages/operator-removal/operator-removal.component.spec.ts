import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorRemovalComponent } from './operator-removal.component';

describe('OperatorRemovalComponent', () => {
  let component: OperatorRemovalComponent;
  let fixture: ComponentFixture<OperatorRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorRemovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
