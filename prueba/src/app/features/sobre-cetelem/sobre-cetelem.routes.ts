import { Routes } from "@angular/router";

export const SobreCetelemRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Sobre Cetelem' },
    children: [
      {
        path: 'app-cetelem',
        loadChildren: () => import('./pages/app-cetelem/app-cetelem.routes').then(m => m.AppCetelemRoutes)
      }
    ]
  }
];
