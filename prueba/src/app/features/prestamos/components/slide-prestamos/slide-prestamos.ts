import { Component, input } from '@angular/core';

@Component({
  selector: 'app-slide-prestamos',
  imports: [],
  templateUrl: './slide-prestamos.html',
  styleUrl: './slide-prestamos.css',
})
export class SlidePrestamos {
  readonly data = input.required<CarrouselItem>();
}

export interface CarrouselItem {
  imgSrc: string, 
  title: string,
  description: string
}

