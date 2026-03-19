import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDepositos1 } from './slide-depositos-1';

describe('SlideDepositos1', () => {
  let component: SlideDepositos1;
  let fixture: ComponentFixture<SlideDepositos1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideDepositos1],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideDepositos1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
