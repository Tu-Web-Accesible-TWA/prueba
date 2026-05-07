import { Component, signal } from '@angular/core';
import { COMERCIOS_BREADCRUMBS } from '../../data/comercios.data';
import { BreadcrumbItem } from './breadcrumb.model';

@Component({
  selector: 'app-comercios-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  readonly items = signal<BreadcrumbItem[]>(COMERCIOS_BREADCRUMBS);
}
