import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  endpoint: string = 'https://cricketchampx.com/v1/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  loginStatus = { isLoggedIn: false };

  constructor(
    private http: HttpClient,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}

  getLoginStatus(): Observable<any> {
    const s = of(this.loginStatus);
    return s;
  }

  isUserLoggedIn() {
    return !!localStorage.getItem('access_token');
  }

  setUserLoggedInStatus(status: boolean) {
    this.loginStatus.isLoggedIn = status;
  }

  // Sign-in
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/auth/login`, user)
      .subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.loginStatus.isLoggedIn = true;
          this._snackBar.open('Sucessfully Logged In', '', {
            horizontalPosition: 'start',
            verticalPosition: 'bottom',
            duration: 1 * 1000,
          });
          this.router.navigate(['dashboard']);
        } else {
          this._snackBar.open('Cannot Login', 'Invalid Credentials', {
            horizontalPosition: 'start',
            verticalPosition: 'bottom',
            duration: 1 * 1000,
          });
        }
        localStorage.setItem('access_token', res.success.access_token);
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  signOut() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  getTeams(): Observable<any> {
    let api = `${this.endpoint}/account/list-all-teams`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
