import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Users } from 'src/app/utility/user.model';
import {first,map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup;
  user ?: Users;
  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private loginService: LoginserviceService,
  ) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['', Validators.required]
    });
  }
  
get f(){
  return this.loginform?.controls
}

  onSubmit(){
    console.log("onSubmit Called()"+this.f.email.value+this.f.password.value)
    if(this.loginform.invalid){return}
    
    this.loginService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      (data : any) => {
        this.user = data;
        if(this.f.email.value == this.user.email && this.f.password.value == this.user.password)
        {
       
        alert("login sucessfully")
        }
        else{
          alert("Invalid Credentails")
          
        }
      },
      (error : any) =>{
        alert("Invalid Login")
      });
    
      
  }
  getUser(){
    
  }
  loginRedirect(){
    
  }
  registerRedirect(){
    
  }

}
