import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home/homepage/homepage.component').then((m) => m.HomepageComponent),
  },
  {
    path: 'signin',
    component: AuthComponent,
  },
  {
    path: 'post',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./forms/post-listings/post-listings.component').then((m) => m.PostListingsComponent),
  },
  {
    path: 'pdp/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./listing/pdp/pdp.component').then((m) => m.PdpComponent),
  },
  {
    path: '**',
    redirectTo: '', // fallback to home
  },
];
