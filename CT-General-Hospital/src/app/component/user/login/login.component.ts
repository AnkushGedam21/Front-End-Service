import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { User } from 'src/app/utility/user.model';
import { first, map, filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  user?: User;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginserviceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginform?.controls;
  }

  onSubmit() {
    if (this.loginform.invalid) {
      return;
    }
    if (this.loginService.login(this.f.email.value, this.f.password.value)) {
      this.toastr.success('Login Successfully');
      this.router.navigate(['/admin']);
    } else {
      this.toastr.error('Internal falied');
    }
  }
  getUser() {}
  loginRedirect() {}
  registerRedirect() {}
}
