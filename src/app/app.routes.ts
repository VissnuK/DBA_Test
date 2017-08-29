import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];