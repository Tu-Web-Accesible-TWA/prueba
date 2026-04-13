import { Component, input } from '@angular/core';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'details[custom]',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})

export class Details {
  readonly title = input.required<string>();
}
