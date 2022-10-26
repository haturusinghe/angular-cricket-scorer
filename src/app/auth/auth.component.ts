import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './service/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'crx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  invalidPassword: boolean = false;

  isloading: boolean = false;
  loginStatus = { isLoggedIn: false };

  constructor(
    private _formBuilder: FormBuilder,
    private authenticationService: AuthServiceService
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.authenticationService
      .getLoginStatus()
      .subscribe((s) => (this.loginStatus = s));
  }

  getTeams() {
    this.authenticationService.getTeams().subscribe((res) => {
      console.log(res);
    });
  }

  onSubmit() {
    console.log('OK');
    this.invalidPassword = false;
    this.isloading = true;
    console.log(this.loginForm.value);
    this.authenticationService.signIn(this.loginForm.value);
  }
}
