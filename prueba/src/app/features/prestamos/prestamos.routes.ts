import { Routes } from "@angular/router";

export const prestamosRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import ('./pages/prestamo/prestamo').then(m => m.Prestamo),
    title: 'Préstamo'
  },
  {
    path: 'prestamo-coche',
    loadComponent: () => import ('./pages/coche/coche').then(m => m.Coche),
    title: 'Coche'
  },
  {
    path: 'prestamo-reforma',
    loadComponent: () => import ('./pages/reforma-y-hogar/reforma-y-hogar').then(m => m.ReformaYHogar),
    title: 'Reforma y Hogar'
  }   
];