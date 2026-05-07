import { Component, signal } from '@angular/core';
import { COMERCIOS_ADVANTAGES } from '../../data/comercios.data';
import { AdvantagesData } from './advantages.model';

@Component({
  selector: 'app-comercios-advantages-banner',
  imports: [],
  templateUrl: './advantages-banner.html',
  styleUrl: './advantages-banner.css',
})
export class AdvantagesBanner {
  readonly data = signal<AdvantagesData>(COMERCIOS_ADVANTAGES);
}
