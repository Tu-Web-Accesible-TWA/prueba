import { Component, signal } from '@angular/core';
import { APP_CETELEM_BREADCRUMBS } from '../../data/app-cetelem.data';

@Component({
  selector: 'app-cetelem-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  readonly items = signal(APP_CETELEM_BREADCRUMBS);
}
