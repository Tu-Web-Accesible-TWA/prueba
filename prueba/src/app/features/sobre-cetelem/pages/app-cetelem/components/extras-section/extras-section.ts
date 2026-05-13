import { Component, signal } from '@angular/core';
import { APP_CETELEM_EXTRAS_GROUPS, APP_CETELEM_EXTRAS_TITLE } from '../../data/app-cetelem.data';
import { AccordionGroup } from '../accordion-group/accordion-group';

@Component({
  selector: 'app-cetelem-extras-section',
  imports: [AccordionGroup],
  templateUrl: './extras-section.html',
  styleUrl: './extras-section.css',
})
export class ExtrasSection {
  readonly heading = signal(APP_CETELEM_EXTRAS_TITLE);
  readonly groups = signal(APP_CETELEM_EXTRAS_GROUPS);
}
