import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LoginInDto } from '../models/LoginInDto';
import { UserInfoResponse } from '../models/UserInfoResponse';
import { EmptyOkResponse } from '../models/EmptyOkResponse';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(user: LoginInDto): Observable<UserInfoResponse> {
    return this.http.get('/security/login')
      .map(res => res.json());
  }

  logout(): Observable<EmptyOkResponse> {
    return this.http.get('/security/logout')
      .map(res => res.json());
  }

  restoreSession(): Observable<UserInfoResponse> {
    return this.http.get('/security/restore-session')
      .map(res => res.json());
  }
}
