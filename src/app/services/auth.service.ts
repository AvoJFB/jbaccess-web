import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment as env} from '../../environments/environment';
import { LoginInDto } from '../models/LoginInDto';
import { UserInfoResponse } from '../models/UserInfoResponse';
import { EmptyOkResponse } from '../models/EmptyOkResponse';
import {UserOutDto} from '../models/UserOutDto';


@Injectable()
export class AuthService {
  BASE_URL: string = env.API_BASE;
  user: UserOutDto;
  loggedIn = false;

  constructor(
    private http: Http
  ) {
    this.loggedIn = !!localStorage.getItem('user');
  }

  login(user: LoginInDto): Observable<UserInfoResponse> {
    return this.http.post(`${this.BASE_URL}/security/login`, user, { withCredentials: true })
      .map(res => res.json())
      .map(res => {
        this.user = res.payload;
        this.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.payload));

        return res;
      });
  }

  logout(): Observable<EmptyOkResponse> {
    return this.http.get(`${this.BASE_URL}/security/logout`, { withCredentials: true })
      .map(res => res.json())
      .map(res => {
        this.user = null;
        this.loggedIn = false;
        localStorage.removeItem('user');

        return res;
      });
  }

  restoreSession(): Observable<UserInfoResponse> {
    return this.http.get(`${this.BASE_URL}/security/restore-session`)
      .map(res => res.json());
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
