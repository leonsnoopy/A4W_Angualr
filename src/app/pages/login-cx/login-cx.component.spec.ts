import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCxComponent } from './login-cx.component';

describe('LoginCxComponent', () => {
  let component: LoginCxComponent;
  let fixture: ComponentFixture<LoginCxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
