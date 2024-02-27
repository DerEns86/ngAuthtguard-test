import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  adminIsLoggedIn = false;
  employeeIsLoggedIn = true;
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {



    if (route.data['role'] === 'admin') { 
      return this.getAdminStatus(); 
    } else if (route.data['role'] === 'employee') {
      return this.getEmployeeStatus(); 
    }

    return this.router.createUrlTree(['/login']);
  }


  getAdminStatus() {
    console.log(this.adminIsLoggedIn);
    return this.adminIsLoggedIn;
  }
  getEmployeeStatus() {
    console.log(this.employeeIsLoggedIn);
    return this.employeeIsLoggedIn;
  }
}
