import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginInDto } from '../models/LoginInDto';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(user: LoginInDto) {
    return this.http.get('/security/login')
      .map(res => res.json());
  }

  logout() {
    return this.http.get('/security/logout')
      .map(res => res.json());
  }

  restoreSession() {
    return this.http.get('/security/restore-session')
      .map(res => res.json());
  }
}
