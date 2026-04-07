import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
})
export class FeatureCard {
  //@Input({ required: true }) title!: string;
  readonly title = input.required<string>();
  readonly description = input.required<string>();  
  
  // Propiedades opcionales para el enlace
  @Input() linkText?: string;
  @Input() linkUrl?: string;
}
