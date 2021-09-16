import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { User } from 'src/app/utility/user.model';
declare const hide: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminname : string = "Admin Name";
  user : User | null = null;
  constructor(private loginService : LoginserviceService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.loginService.userInfo.subscribe((user)=>{
    this.user= user;
    if(user){
      this.adminname = user.firstName+" "+user.lastName;
    }
  })
  }

  onClick(){
    hide();
  }
  onLogout() {
    this.loginService.logout();
    this.router.navigate(['login'])
    
  }
}
