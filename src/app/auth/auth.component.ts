import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './service/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private authenticationService: AuthServiceService,
    private router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('LOGIN CHECK');
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['dashboard/start']);
    }
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

  viewScore() {
    this.router.navigate(['live-scores']);
  }

  loginFormSubmit() {
    this.invalidPassword = false;
    this.isloading = true;
    console.log(this.loginForm.value);
    this.authenticationService.signIn(this.loginForm.value);
  }
}
