import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loan-feature-card',
  imports: [],
  templateUrl: './loan-feature-card.html',
  styleUrl: './loan-feature-card.css',
})
export class LoanFeatureCard {
  readonly maxAmount = input.required<string>();
  readonly tinRange = input.required<string>();
  readonly taeRange = input.required<string>();
}
