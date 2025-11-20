import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login - Painel Admin' },
  { path: 'register', component: RegisterComponent, title: 'Register - Painel Admin' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
];
