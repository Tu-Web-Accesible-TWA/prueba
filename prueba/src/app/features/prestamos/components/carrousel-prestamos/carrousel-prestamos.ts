import { afterNextRender, Component, ElementRef, viewChild, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { SlidePrestamos } from '../slide-prestamos/slide-prestamos';


registerSwiperElements();

@Component({
  selector: 'app-carrousel-prestamos',
  imports: [SlidePrestamos],
  templateUrl: './carrousel-prestamos.html',
  styleUrl: './carrousel-prestamos.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarrouselPrestamos {
  readonly data = input.required<CarrouselItem[]>();
  
  swiperRef = viewChild.required<ElementRef>('swiper');
  paginationRef = viewChild.required<ElementRef>('pagination');

  constructor() {
    afterNextRender(() => {
      const swiperEl = this.swiperRef().nativeElement;

      const swiperParams = {
        pagination: {
          el: this.paginationRef().nativeElement,
          clickable: true
        },
        a11y: {
          enabled: true,
          paginationBulletMessage: 'Ir a la diapositiva {{index}}'
        },
        injectStyles: [
          `
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
          `
        ]
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    });
  }
}

export interface CarrouselItem {
  imgSrc: string, 
  title: string,
  description: string
}
