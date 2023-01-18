import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetLiveScoresService {
  matchid = localStorage.getItem('match_id');
  endpoint: string = 'https://cricketchampx.com/v1/api';
  constructor(
    private http: HttpClient,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  loginStatus = { isLoggedIn: false };

  getMatches(): Observable<any> {
    let api = `${this.endpoint}/scores/get-all-scorecards`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getMatchIds(): Observable<any> {
    let api = `${this.endpoint}/scores/get-all-scorecards`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getSingleMatchData(id: string): Observable<any> {
    let api = `${this.endpoint}/scores/live-score/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 'Error';
      }),
      catchError(this.handleError)
    );
  }

  getScoreCard(matchid: string): Observable<any> {
    let api = `${this.endpoint}/scores/live-score/${matchid}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      catchError(this.handleError)
    );
  }

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
