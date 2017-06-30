import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(user: LoginInDto) {
    return this.http.get('/security/login');
  }

  logout() {
    return this.http.get('/security/logout');
  }

  restoreSession() {
    return this.http.get('/security/restore-session');
  }
}
