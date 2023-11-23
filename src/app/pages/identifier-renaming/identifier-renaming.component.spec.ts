import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifierRenamingComponent } from './identifier-renaming.component';

describe('IdentifierRenamingComponent', () => {
  let component: IdentifierRenamingComponent;
  let fixture: ComponentFixture<IdentifierRenamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifierRenamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifierRenamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
