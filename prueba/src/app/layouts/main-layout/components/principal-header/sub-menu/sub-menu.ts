import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

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


export interface SubmenuItem {
  label: string;
  url: string;
  iconClass: string;
}

export interface SubmenuData {
  title: string;
  imageUrl: string;
  items: SubmenuItem[];
  buttonText: string;
  buttonUrl: string;
}