import { Routes } from "@angular/router";

export const prestamosRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Préstamos' },
    children: [
      {
        path: '', // La página principal de préstamos (/prestamos)
        loadComponent: () => import('./pages/prestamo/prestamo').then(m => m.Prestamo),
        title: 'Préstamos'
      },
      {
        path: 'prestamo-coche', // Ruta: /prestamos/coche
        loadComponent: () => import('./pages/coche/coche').then(m => m.Coche),
        title: 'Coche',
        data: { breadcrumb: 'Coche' }
      },
      {
        path: 'prestamo-reforma', // Ruta: /prestamos/reforma
        loadComponent: () => import('./pages/reforma-y-hogar/reforma-y-hogar').then(m => m.ReformaYHogar),
        title: 'Reforma y Hogar',
        data: { breadcrumb: 'Reforma y Hogar' }
      }
    ]
  }
];