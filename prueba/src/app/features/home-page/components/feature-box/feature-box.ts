import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-box',
  imports: [RouterLink],
  templateUrl: './feature-box.html',
  styleUrl: './feature-box.css',
})
export class FeatureBox {
  readonly linkUrl = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly linkText = input.required<string>();
}
