import { Component, input } from '@angular/core';
import { Feature } from './feature.model';

@Component({
  selector: 'app-comercios-feature-item',
  imports: [],
  templateUrl: './feature-item.html',
  styleUrl: './feature-item.css',
})
export class FeatureItem {
  readonly icon = input.required<Feature['icon']>();
  readonly iconAlt = input.required<Feature['iconAlt']>();
  readonly title = input.required<Feature['title']>();
  readonly description = input.required<Feature['description']>();
}
