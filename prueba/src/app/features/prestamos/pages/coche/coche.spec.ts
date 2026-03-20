import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche } from './coche';

describe('Coche', () => {
  let component: Coche;
  let fixture: ComponentFixture<Coche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coche],
    }).compileComponents();

    fixture = TestBed.createComponent(Coche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
