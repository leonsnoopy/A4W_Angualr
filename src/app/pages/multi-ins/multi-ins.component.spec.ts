import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInsComponent } from './multi-ins.component';

describe('MultiInsComponent', () => {
  let component: MultiInsComponent;
  let fixture: ComponentFixture<MultiInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
