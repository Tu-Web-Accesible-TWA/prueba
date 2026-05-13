import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-cetelem-accordion-item',
  imports: [],
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.css',
})
export class AccordionItem {
  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly content = input.required<string>();
  readonly videoUrl = input<string | null>(null);
  readonly videoText = input<string | null>(null);
  readonly defaultOpen = input<boolean>(false);

  protected readonly internalOpen = signal<boolean | null>(null);

  protected isOpen(): boolean {
    const overridden = this.internalOpen();
    return overridden ?? this.defaultOpen();
  }

  toggle() {
    this.internalOpen.set(!this.isOpen());
  }
}
