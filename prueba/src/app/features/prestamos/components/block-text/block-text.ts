import { Component, input } from '@angular/core';

@Component({
  selector: 'app-block-text',
  imports: [],
  templateUrl: './block-text.html',
  styleUrl: './block-text.css',
})
export class BlockText {
  readonly title = input.required<string>();
  readonly text = input.required<string[]>();
}
