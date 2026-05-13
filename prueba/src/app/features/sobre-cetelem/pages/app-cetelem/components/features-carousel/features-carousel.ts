import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { APP_CETELEM_FEATURES, APP_CETELEM_FEATURES_TITLE } from '../../data/app-cetelem.data';
import { FeatureCard } from '../feature-card/feature-card';

@Component({
  selector: 'app-cetelem-features-carousel',
  imports: [FeatureCard],
  templateUrl: './features-carousel.html',
  styleUrl: './features-carousel.css',
})
export class FeaturesCarousel {
  readonly heading = signal(APP_CETELEM_FEATURES_TITLE);
  readonly features = signal(APP_CETELEM_FEATURES);
  readonly track = viewChild<ElementRef<HTMLElement>>('track');

  scrollBy(direction: -1 | 1) {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const item = el.querySelector<HTMLElement>('.features-carousel-item');
    const step = item ? item.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: 'smooth' });
  }
}
