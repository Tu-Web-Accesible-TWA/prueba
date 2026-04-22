import { Component, input } from '@angular/core';
import { BlockText } from '../block-text/block-text';

@Component({
  selector: 'app-image-up-text',
  imports: [BlockText],
  templateUrl: './image-up-text.html',
  styleUrl: './image-up-text.css',
})
export class ImageUpText {
  readonly imgUrl = input.required<string>();
  readonly title = input.required<string>();
  readonly text = input.required<string[]>();
}
