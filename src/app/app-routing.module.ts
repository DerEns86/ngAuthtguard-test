import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminStartComponent } from './admin/admin-start/admin-start.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeStartComponent } from './employee/employee-start/employee-start.component';

import { LoginComponent } from './login.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,  canActivate: [AuthGuardService], data: { role: 'admin' }, children: [
    { path: '', component: AdminStartComponent }
  ] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuardService], data: { role: 'employee' }, children: [
    { path: '', component: EmployeeStartComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
