import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  data = input.required<{id: number, name: string}>();
}
