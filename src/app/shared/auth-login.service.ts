import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  constructor() {}

  isUserLoggedIn() {
    return !!localStorage.getItem('access_token');
  }
}
