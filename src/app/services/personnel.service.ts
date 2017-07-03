import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PersonResponse } from '../models/PersonResponse';
import { PersonInDto } from '../models/PersonInDto';

@Injectable()
export class PersonnelService {

  constructor(
    private http: Http
  ) { }

  getPersonById(id): Observable<PersonResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.get(`/person/${id}`, { search: params })
      .map(res => res.json());
  }

  updatePersonById(id, person: PersonInDto): Observable<PersonResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.put(`/person/${id}`, person)
      .map(res => res.json());
  }
}
