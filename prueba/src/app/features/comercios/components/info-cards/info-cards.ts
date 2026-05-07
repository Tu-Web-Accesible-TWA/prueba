import { Component, signal } from '@angular/core';
import { COMERCIOS_INFO_CARDS } from '../../data/comercios.data';
import { InfoCard } from '../info-card/info-card';
import { InfoCardData } from '../info-card/info-card.model';

@Component({
  selector: 'app-comercios-info-cards',
  imports: [InfoCard],
  templateUrl: './info-cards.html',
  styleUrl: './info-cards.css',
})
export class InfoCards {
  readonly cards = signal<InfoCardData[]>(COMERCIOS_INFO_CARDS);
}
