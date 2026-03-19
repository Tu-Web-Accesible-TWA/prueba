import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  
}
