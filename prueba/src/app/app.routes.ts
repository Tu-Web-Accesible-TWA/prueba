import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/pages/home-page';
import { NotFOund } from './features/not-found/not-found';
import { MainLayout } from './layouts/main-layout/pages/main-layout';
import { SecondaryLayout } from './layouts/secondary-layout/pages/secondary-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: HomePage }
    ]
  },
  {
    path: 'cuentas',
    component: SecondaryLayout,
    children: [
      { path:'', loadComponent: () => import ('./features/pagina1/pagina1').then(m => m.Pagina1)}
    ]
  },
  { path: '**', component: NotFOund}
];
