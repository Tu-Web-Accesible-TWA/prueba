import { CommonModule } from '@angular/common';
import { afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, viewChild } from '@angular/core';
import { SlideDepositos } from '../slide-depositos/slide-depositos';
import { SlideDepositos1 } from '../slide-depositos-1/slide-depositos-1';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, SlideDepositos, SlideDepositos1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})
export class Carrousel {
  swiperRef = viewChild.required<ElementRef>('swiper');
  paginationRef = viewChild.required<ElementRef>('pagination');
  isPlaying = signal(true);

  constructor() {
    afterNextRender(() => {
      const swiperEl = this.swiperRef().nativeElement;

      const swiperParams = {
        navigation: true,
        pagination: {
          el: this.paginationRef().nativeElement,
          clickable: true
        },
        autoplay: {
          delay: 9000,
          disableOnInteraction: false
        },
        a11y: {
          enabled: true,
          prevSlideMessage: "Slide anterior",
          nextSlideMessage: "Siguiente slide",
          paginationBulletMessage: 'Ir a la diapositiva {{index}}'
        },
        injectStyles: [
          `
            .swiper-button-next svg,
            .swiper-button-prev svg {
              height: 50% !important;
              width: auto;
            }
          `
        ]
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    });
  }

  toggleAutoplay() {
    const swiperInstance = this.swiperRef()?.nativeElement.swiper;

    if (this.isPlaying()) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }

    this.isPlaying.set(!this.isPlaying());
  }
}
