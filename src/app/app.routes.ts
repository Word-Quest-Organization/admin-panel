import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login - Painel Admin' }
];
