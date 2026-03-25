import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, ViewChild } from '@angular/core';
import { SlideDepositos } from '../slide-depositos/slide-depositos';
import { SlideDepositos1 } from '../slide-depositos-1/slide-depositos-1';

@Component({
  selector: 'app-carrousel',
  imports: [CommonModule, SlideDepositos, SlideDepositos1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})
export class Carrousel {
  @ViewChild('swiper') swiperRef!: ElementRef;
  // Signal para controlar el estado visual del botón
  isPlaying = signal(true);

  toggleAutoplay() {
    const swiperEl = this.swiperRef.nativeElement;
    
    if (this.isPlaying()) {
      swiperEl.swiper.autoplay.stop();
      this.isPlaying.set(false);
    } else {
      swiperEl.swiper.autoplay.start();
      this.isPlaying.set(true);
    }
  }
}
