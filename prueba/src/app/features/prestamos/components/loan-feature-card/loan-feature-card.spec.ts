import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFeatureCard } from './loan-feature-card';

describe('LoanFeatureCard', () => {
  let component: LoanFeatureCard;
  let fixture: ComponentFixture<LoanFeatureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanFeatureCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanFeatureCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
