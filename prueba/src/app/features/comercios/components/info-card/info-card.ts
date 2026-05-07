import { Component, input } from '@angular/core';

@Component({
  selector: 'app-comercios-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly image = input.required<string>();
  readonly imageAlt = input.required<string>();
}
