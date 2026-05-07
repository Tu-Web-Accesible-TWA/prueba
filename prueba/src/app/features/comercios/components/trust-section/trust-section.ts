import { Component, signal } from '@angular/core';
import { COMERCIOS_TRUST } from '../../data/comercios.data';
import { TrustData } from './trust.model';

@Component({
  selector: 'app-comercios-trust-section',
  imports: [],
  templateUrl: './trust-section.html',
  styleUrl: './trust-section.css',
})
export class TrustSection {
  readonly data = signal<TrustData>(COMERCIOS_TRUST);
}
