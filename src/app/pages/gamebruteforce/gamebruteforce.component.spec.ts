import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamebruteforceComponent } from './gamebruteforce.component';

describe('GamebruteforceComponent', () => {
  let component: GamebruteforceComponent;
  let fixture: ComponentFixture<GamebruteforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamebruteforceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamebruteforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
