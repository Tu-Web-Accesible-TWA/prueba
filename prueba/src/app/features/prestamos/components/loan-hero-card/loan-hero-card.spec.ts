import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanHeroCard } from './loan-hero-card';

describe('LoanHeroCard', () => {
  let component: LoanHeroCard;
  let fixture: ComponentFixture<LoanHeroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanHeroCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanHeroCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
