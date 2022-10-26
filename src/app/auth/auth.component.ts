import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './service/auth-service.service';
@Component({
  selector: 'crx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  invalidPassword: boolean = false;

  isloading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private authenticationService: AuthServiceService
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    this.invalidPassword = false;
    this.isloading = true;
    console.log(this.loginForm.value);
    this.authenticationService.signIn(this.loginForm.value);
    // console.log(this.loginForm.value.username, this.loginForm.value.password);
    /* this.authenticationService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .then(); */
  }

  getTeams() {
    this.authenticationService.getTeams().subscribe((res) => {
      console.log(res);
    });
  }
}
