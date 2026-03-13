import { Routes } from '@angular/router';
import { HomePage } from './views/home-page/home-page';
import { NotFOund } from './views/not-found/not-found';
import { MainLayout } from './layouts/main-layout/main-layout';
import { SecondaryLayout } from './layouts/secondary-layout/secondary-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', component: HomePage },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  {
    path: 'cuentas',
    component: SecondaryLayout,
    children: [
      { path:'', loadComponent: () => import ('./views/pagina1/pagina1').then(m => m.Pagina1)}
    ]
  },
  { path: '**', component: NotFOund}
];
