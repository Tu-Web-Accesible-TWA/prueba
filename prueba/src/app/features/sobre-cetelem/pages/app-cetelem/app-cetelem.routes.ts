import { Routes } from "@angular/router";

export const AppCetelemRoutes: Routes = [
  {
    path: '',
    title: 'App Cetelem',
    data: { breadcrumb: 'App Cetelem' },
    loadComponent: () => import('./page/app-cetelem').then(m => m.AppCetelem)
  }
];
