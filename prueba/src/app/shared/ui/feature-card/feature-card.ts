import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
})
export class FeatureCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();  
  // Propiedades opcionales para el enlace
  readonly linkText = input<string>();
  readonly linkUrl = input<string>();
}
