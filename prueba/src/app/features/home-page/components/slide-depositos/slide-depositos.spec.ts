import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDepositos } from './slide-depositos';

describe('SlideDepositos', () => {
  let component: SlideDepositos;
  let fixture: ComponentFixture<SlideDepositos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideDepositos],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideDepositos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
