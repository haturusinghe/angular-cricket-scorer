import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Team } from '../i/team';
import { catchError, map, tap } from 'rxjs/operators';
import { TeamDetails } from '../i/teamDetails';

import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';
@Injectable({
  providedIn: 'root',
})
export class TeamDataService {
  private teamUrl = 'api/TEAMS';

  endpoint: string = 'https://cricketchampx.com/v1/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  teams = this.getTeams();
  teamDetails!: { name: string; id: number };
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Basic ' + this.token,
  //   }),
  // };

  // getToken() {
  //   this.token = this.authServiceService.getToken();
  // }

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    let api = `${this.endpoint}/account/list-all-teams`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getPlayingTeamById(id: number): Observable<any> {
    let api = `${this.endpoint}/account/get-players-by-team/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 'Error';
      }),
      catchError(this.handleError)
    );
  }

  getAllTeams() {
    this.teams.forEach((team) => {
      this.teamDetails;
    });
  }

  getTeamNames() {}
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

  ngOnInit() {
    this.getAllTeams();
  }
}
