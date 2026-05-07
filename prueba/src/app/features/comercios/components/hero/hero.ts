import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { COMERCIOS_HERO_DATA } from '../../data/comercios.data';
import { HeroData } from './hero.model';

@Component({
  selector: 'app-comercios-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly data = signal<HeroData>(COMERCIOS_HERO_DATA);
  readonly username = signal('');
  readonly password = signal('');

  onSubmit() {
    // Hook para conectar al backend en el futuro
  }
}
