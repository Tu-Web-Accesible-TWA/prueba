import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  imports: [],
  templateUrl: './card1.html',
  styleUrl: './card1.css',
})
export class Card1 {
  //@Input({ required: true }) title!: string;
  readonly title = input.required<string>();
  readonly description = input.required<string>();  
  
  // Propiedades opcionales para el enlace
  @Input() linkText?: string;
  @Input() linkUrl?: string;
}
