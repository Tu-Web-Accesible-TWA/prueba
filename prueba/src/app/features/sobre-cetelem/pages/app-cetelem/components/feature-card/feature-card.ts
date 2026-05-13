import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cetelem-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
})
export class FeatureCard {
  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly image = input.required<string>();
  readonly imageAlt = input.required<string>();
  readonly videoUrl = input.required<string>();
  readonly videoText = input.required<string>();
}
