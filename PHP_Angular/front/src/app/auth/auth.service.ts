import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { ServiceModel } from '../../utils/service-model';
import { Session } from '../utils/session';

@Injectable()
export class AuthService{
  session:Session = new Session();
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = this.session.getSession("vm_tk");
    // Check whether the token is expired and return
    // true or false
    // console.log(this.jwtHelper.isTokenExpired());
    // console.log(this.jwtHelper.getTokenExpirationDate());
    // console.log(this.jwtHelper.decodeToken(token));
    if(token){
      return true;
    }else{
      return false;
    }

    // return !this.jwtHelper.isTokenExpired(token);
  }
}
