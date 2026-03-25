import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';
import { Breadcrumb } from '../../models/breadcrumbs.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  // Creamos un signal reactivo que reacciona a los eventos del router
  // startWith(null) fuerza una ejecución inmediata al suscribirse
  breadcrumbs = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(null), 
      map(() => this.createBreadcrumbs(this.activatedRoute.root))
    ),
    { initialValue: [] as Breadcrumb[] }
  );

  private createBreadcrumbs(route: ActivatedRoute | null, url = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    if (!route) return breadcrumbs;

    const routePath = route.snapshot.url.map(segment => segment.path).join('/');
    const nextUrl = routePath ? `${url}/${routePath}` : url;
    const label = route.snapshot.data['breadcrumb'];

    if (label) {
      const isDuplicate = breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1].url === (nextUrl || '/');
      
      if (!isDuplicate) {
        breadcrumbs.push({
          label,
          url: nextUrl || '/'
        });
      }
    }

    return this.createBreadcrumbs(route.firstChild, nextUrl, breadcrumbs);
  }
}
