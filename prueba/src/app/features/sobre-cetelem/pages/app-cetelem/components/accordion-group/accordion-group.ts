import { Component, input } from '@angular/core';
import { AccordionItem } from '../accordion-item/accordion-item';

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
  videoUrl?: string | null;
  videoText?: string | null;
  defaultOpen?: boolean;
}

@Component({
  selector: 'app-cetelem-accordion-group',
  imports: [AccordionItem],
  templateUrl: './accordion-group.html',
  styleUrl: './accordion-group.css',
})
export class AccordionGroup {
  readonly title = input.required<string>();
  readonly items = input.required<AccordionItemData[]>();
}
