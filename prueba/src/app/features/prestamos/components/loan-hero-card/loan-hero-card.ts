import { Component, input } from '@angular/core';
import { LoanFeatureCard } from '../loan-feature-card/loan-feature-card';
import { LoanCardData } from '../../models/loan-card.model';

@Component({
  selector: 'app-loan-hero-card',
  imports: [LoanFeatureCard],
  templateUrl: './loan-hero-card.html',
  styleUrl: './loan-hero-card.css',
})
export class LoanHeroCard {
  readonly data = input.required<LoanCardData>();
}
