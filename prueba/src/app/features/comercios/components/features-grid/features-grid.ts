import { Component, signal } from '@angular/core';
import { COMERCIOS_FEATURES } from '../../data/comercios.data';
import { FeatureItem } from '../feature-item/feature-item';

@Component({
  selector: 'app-comercios-features-grid',
  imports: [FeatureItem],
  templateUrl: './features-grid.html',
  styleUrl: './features-grid.css',
})
export class FeaturesGrid {
  readonly features = signal(COMERCIOS_FEATURES);
}
