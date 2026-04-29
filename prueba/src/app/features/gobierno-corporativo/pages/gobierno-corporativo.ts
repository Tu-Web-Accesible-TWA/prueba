import { Component, signal } from '@angular/core';
import { Breadcrumbs } from '../../../shared/ui/breadcrumbs/breadcrumbs';
import { GOBIERNO_CORPORATIVO_DATA } from './data/gobierno-corporativo.data';

@Component({
  selector: 'app-gobierno-corporativo',
  imports: [Breadcrumbs],
  templateUrl: './gobierno-corporativo.html',
  styleUrl: './gobierno-corporativo.css',
})
export class gobiernoCorporativo {
  data=signal(GOBIERNO_CORPORATIVO_DATA);
}
