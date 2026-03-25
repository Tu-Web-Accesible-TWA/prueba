import { Routes } from "@angular/router";

export const tarjetaRoutes: Routes = [
  {
    path: '',
    title: 'Tarjeta',
    data: { breadcrumb: 'Tarjeta' },
    loadComponent: () => import('./pages/tarjeta/tarjeta').then(m => m.Tarjeta)
  }
];