import { Component, signal } from '@angular/core';
import { APP_CETELEM_HERO_DATA } from '../../data/app-cetelem.data';

@Component({
  selector: 'app-cetelem-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly data = signal(APP_CETELEM_HERO_DATA);
}
