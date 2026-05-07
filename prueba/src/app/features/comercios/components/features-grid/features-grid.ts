import { Component, signal } from '@angular/core';
import { COMERCIOS_FEATURES } from '../../data/comercios.data';
import { FeatureItem } from '../feature-item/feature-item';
import { Feature } from '../feature-item/feature.model';

@Component({
  selector: 'app-comercios-features-grid',
  imports: [FeatureItem],
  templateUrl: './features-grid.html',
  styleUrl: './features-grid.css',
})
export class FeaturesGrid {
  readonly features = signal<Feature[]>(COMERCIOS_FEATURES);
}
