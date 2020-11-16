import { Injectable } from '@angular/core';

@Injectable()
export class AuthTypeUserService {
  typeUser:number;
  constructor() {}
  setType(num){
    this.typeUser = num;
  }
  getType(){
    return this.typeUser;
  }
  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
//   canActivate() : Observable<boolean> | boolean {
    
//     return true;
//   }
}
