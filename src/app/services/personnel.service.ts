import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PersonResponse } from '../models/PersonResponse';
import { PersonInDto } from '../models/PersonInDto';
import { EmptyOkResponse } from '../models/EmptyOkResponse';
import { AllKeysResponse } from '../models/AllKeysResponse';
import { AllRolesResponse } from '../models/AllRolesResponse';
import { AllPersonnelResponse } from '../models/AllPersonnelResponse';



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

    return this.http.put(`/person/${id}`, { search: params }, person)
      .map(res => res.json());
  }

  deletePersonById(id): Observable<EmptyOkResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.delete(`/person/${id}`, { search: params })
      .map(res => res.json());
  }

  getPersonsKeys(id): Observable<AllKeysResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.get(`/person/${id}/keys`, { search: params })
      .map(res => res.json());
  }

  getPersonsRoles(id): Observable<AllRolesResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.get(`/person/${id}/roles`, { search: params })
      .map(res => res.json());
  }

  attachRoleToPerson(person_id, role_id): Observable<EmptyOkResponse> {
    const params = new URLSearchParams();
    params.set('person_id', person_id);
    params.set('role_id', role_id);

    return this.http.put(`/person/${person_id}/roles/${role_id}`, { search: params })
      .map(res => res.json());
  }

  detachRoleFromPerson(person_id, role_id): Observable<EmptyOkResponse> {
    const params = new URLSearchParams();
    params.set('person_id', person_id);
    params.set('role_id', role_id);

    return this.http.delete(`/person/${person_id}/roles/${role_id}`, { search: params })
      .map(res => res.json());
  }

  getAllPersonnel(): Observable<AllPersonnelResponse> {
    return this.http.get('person')
      .map(res => res.json());
  }
}
