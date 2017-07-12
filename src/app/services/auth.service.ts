import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { environment as env} from '../../environments/environment';
import { LoginInDto, UserInfoResponse, EmptyOkResponse, UserOutDto } from '../shared/models/models';

@Injectable()
export class AuthService {
  BASE_URL: string = env.API_BASE;
  user: UserOutDto;
  loggedIn = false;

  constructor(
    private http: Http
  ) {
    this.loggedIn = !!localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  login(user: LoginInDto): Observable<UserInfoResponse> {
    return this.http.post(`${this.BASE_URL}/security/login`, user, { withCredentials: true })
      .map(res => res.json())
      .map(res => {
        this.user = res.payload;
        this.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.payload));

        return res;
      })
      .catch(this.handleError);
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

  getCurrentUser(): UserOutDto {
    return this.user;
  }

  handleError(err: any) {
    return Observable.throw(err.json().service.error_message || 'backend server error');
  }
}
