import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
