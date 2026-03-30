import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubmenuData } from '../../../../../core/models/menu.model';

@Component({
  selector: 'app-sub-menu',
  imports: [RouterLink],
  templateUrl: './sub-menu.html',
  styleUrl: './sub-menu.css',
})
export class SubMenu {
  data = input.required<SubmenuData>();
  isVisible = input.required<boolean>();
}