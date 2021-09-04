import { Injectable } from '@angular/core';
import { Users } from '../utility/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private user ?:Users
  constructor() { }
  login(email:string,password:string){
    console.log("it is work")
    
  }
}
