import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
  canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      // this.router.navigate(['']);
      // this.router.navigateByUrl("http://localhost:4200");
      // console.log("MARILENE");
      // this.router.navigate(['/pericias']);
      //   window.location.href = "http://"+window.location.host;
      return true;
    }
    this.router.navigate(['/']);
    return true;
  }
}
