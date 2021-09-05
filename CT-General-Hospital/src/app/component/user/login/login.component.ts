import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Users } from 'src/app/utility/user.model';
import {first,map,filter} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
    console.log("onSubmit Called()"+this.f.email.value+""+this.f.password.value)
    if(this.loginform.invalid){return}
    
    this.loginService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      (data : any) => {
        this.user = data;
        if(this.f.email.value == this.user.email && this.f.password.value == this.user.password)
        {
       this.toastr.success("Login Successfully");
        }
        else{
          //alert("Invalid Credentails");
          this.toastr.error("Internal Error")
          this.router.navigate(['admin'])
        }
      },
      (error : any) =>{
        //alert("Invalid Login")
        this.router.navigate(['admin'])
        this.toastr.error("Inavalid failed")
        this.router.navigate(['admin'])
      });
    
      
  }
  getUser(){
    
  }
  loginRedirect(){
    
  }
  registerRedirect(){
    
  }

}
