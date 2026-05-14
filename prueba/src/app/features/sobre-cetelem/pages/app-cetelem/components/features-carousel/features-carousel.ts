import {
  afterNextRender,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import {
  APP_CETELEM_FEATURES,
  APP_CETELEM_FEATURES_TITLE,
} from '../../data/app-cetelem.data';
import { FeatureCard } from '../feature-card/feature-card';

registerSwiperElements();

@Component({
  selector: 'app-cetelem-features-carousel',
  imports: [FeatureCard],
  templateUrl: './features-carousel.html',
  styleUrl: './features-carousel.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesCarousel {
  readonly heading = signal(APP_CETELEM_FEATURES_TITLE);
  readonly features = signal(APP_CETELEM_FEATURES);
  readonly swiperRef = viewChild.required<ElementRef>('swiper');
  readonly prevRef = viewChild.required<ElementRef>('prev');
  readonly nextRef = viewChild.required<ElementRef>('next');

  constructor() {
    afterNextRender(() => {
      const swiperEl = this.swiperRef().nativeElement;

      Object.assign(swiperEl, {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: { hide: false, draggable: true },
        navigation: {
          prevEl: this.prevRef().nativeElement,
          nextEl: this.nextRef().nativeElement,
        },
        a11y: {
          enabled: true,
          containerMessage: 'Funcionalidades de la APP Cetelem',
          prevSlideMessage: 'Ver elementos anteriores',
          nextSlideMessage: 'Ver más elementos',
        },
        breakpoints: {
          0: { slidesPerView: 1.2, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        },
      });

      swiperEl.initialize();
    });
  }
}
