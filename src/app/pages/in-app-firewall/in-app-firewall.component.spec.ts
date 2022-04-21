import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTextComponent } from './in-app-firewall.component';

describe('ApiTextComponent', () => {
  let component: ApiTextComponent;
  let fixture: ComponentFixture<ApiTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
