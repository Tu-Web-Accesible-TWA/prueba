import { Component, signal } from '@angular/core';
import { COMERCIOS_TRUST } from '../../data/comercios.data';

@Component({
  selector: 'app-comercios-trust-section',
  imports: [],
  templateUrl: './trust-section.html',
  styleUrl: './trust-section.css',
})
export class TrustSection {
  readonly data = signal(COMERCIOS_TRUST);
}
