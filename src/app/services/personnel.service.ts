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
import { PersonAclResponse } from '../models/PersonAclResponse';
import { AllPersonAclsResponse } from '../models/AllPersonAclsResponse';


@Injectable()
export class PersonnelService {

  constructor(
    private http: Http
  ) { }

  getPerson(id): Observable<PersonResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.get(`/person/${id}`, { search: params })
      .map(res => res.json());
  }

  updatePerson(id, person: PersonInDto): Observable<PersonResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.put(`/person/${id}`, { search: params }, person)
      .map(res => res.json());
  }

  deletePerson(id): Observable<EmptyOkResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.delete(`/person/${id}`, { search: params })
      .map(res => res.json());
  }

  getKeysByPerson(id): Observable<AllKeysResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.get(`/person/${id}/keys`, { search: params })
      .map(res => res.json());
  }

  getRolesByPerson(id): Observable<AllRolesResponse> {
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
    return this.http.get('/person')
      .map(res => res.json());
  }

  createPerson(person: PersonInDto): Observable<PersonResponse> {
    return this.http.post('/person', person)
      .map(res => res.json());
  }

  allowPlaceForPerson(person_id, place_id): Observable<PersonAclResponse> {
    const params = new URLSearchParams();
    params.set('person_id', person_id);
    params.set('place_id', place_id);

    return this.http.post(`/person/${person_id}/allow/${place_id}`, { search: params })
      .map(res => res.json());
  }

  denyPlaceForPerson(person_id, place_id): Observable<PersonAclResponse> {
    const params = new URLSearchParams();
    params.set('person_id', person_id);
    params.set('place_id', place_id);

    return this.http.post(`/person/${person_id}/deny/${place_id}`, { search: params })
      .map(res => res.json());
  }

  getPersonACLs(id): Observable<AllPersonAclsResponse> {
    const params = new URLSearchParams();
    params.set('id', id);

    return this.http.get(`/person/${id}/acls`, { search: params })
      .map(res => res.json());
  }
}
