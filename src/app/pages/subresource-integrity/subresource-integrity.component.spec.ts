import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubresourceIntegrityComponent } from './subresource-integrity.component';

describe('SubresourceIntegrityComponent', () => {
  let component: SubresourceIntegrityComponent;
  let fixture: ComponentFixture<SubresourceIntegrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubresourceIntegrityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubresourceIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
