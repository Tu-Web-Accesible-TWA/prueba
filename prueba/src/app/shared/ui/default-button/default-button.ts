import { Component, input } from '@angular/core';

@Component({
  selector: 'app-default-button',
  imports: [],
  templateUrl: './default-button.html',
  styleUrl: './default-button.css',
})
export class DefaultButton {
  readonly linkText = input.required<string>();
  readonly linkUrl = input.required<string>();
  readonly ariaLabel = input<string>();
}
