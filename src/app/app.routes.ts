import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { UserListComponent } from './components/user-list/user-list';
import { RoleTypeListComponent } from './components/role-type-list/role-type-list';
import { StatusListComponent } from './components/status-list/status-list';
import { AuthGuard } from './guards/auth-guard';
import { AdminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'roles', component: RoleTypeListComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'statuses', component: StatusListComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route after login
  { path: '**', redirectTo: '/login' } // Redirect to login for any other path
];
