import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppIntegrityComponent } from './web-app-integrity.component';

describe('WebAppIntegrityComponent', () => {
  let component: WebAppIntegrityComponent;
  let fixture: ComponentFixture<WebAppIntegrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppIntegrityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
