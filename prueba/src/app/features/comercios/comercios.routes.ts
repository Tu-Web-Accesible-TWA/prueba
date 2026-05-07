import { Routes } from '@angular/router';

export const ComerciosRoutes: Routes = [
  {
    path: '',
    title: 'Comercios',
    data: { breadcrumb: 'Comercios' },
    loadComponent: () => import('./pages/comercios').then(m => m.Comercios)
  }
];
