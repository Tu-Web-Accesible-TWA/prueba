import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '../../../core/services/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  private breadcrumbService = inject(BreadcrumbService);
  // Exponemos el signal al template
  breadcrumbs = this.breadcrumbService.breadcrumbs;
}
