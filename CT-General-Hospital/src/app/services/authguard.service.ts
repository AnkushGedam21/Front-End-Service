import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterState, RouterStateSnapshot } from '@angular/router';
import { User } from '../utility/user.model';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  user : User | null = null;
  constructor(private loginService : LoginserviceService) {
    this.loginService.userInfo.subscribe((user) =>{
      this.user = user;
    })
   }
   canActivate(route :ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
     if(this.user){
       return true;
     }
     else{
       return false;
     }
   }


}
