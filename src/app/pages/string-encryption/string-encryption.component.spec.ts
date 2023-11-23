import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringEncryptionComponent } from './string-encryption.component';

describe('StringEncryptionComponent', () => {
  let component: StringEncryptionComponent;
  let fixture: ComponentFixture<StringEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringEncryptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
