import { Component, input } from '@angular/core';
import { InfoCardData } from './info-card.model';

@Component({
  selector: 'app-comercios-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
  readonly title = input.required<InfoCardData['title']>();
  readonly description = input.required<InfoCardData['description']>();
  readonly image = input.required<InfoCardData['image']>();
  readonly imageAlt = input.required<InfoCardData['imageAlt']>();
}
