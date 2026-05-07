import { Component, signal } from '@angular/core';
import { COMERCIOS_BREADCRUMBS } from '../../data/comercios.data';

@Component({
  selector: 'app-comercios-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  readonly items = signal(COMERCIOS_BREADCRUMBS);
}
