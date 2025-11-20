import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './auth/register/register';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login - Painel Admin' },
  { path: 'register', component: Register, title: 'Register - Painel Admin' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard'},
  
];
