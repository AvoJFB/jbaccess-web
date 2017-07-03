import { ServiceObject } from '../models/ServiceObject';
import { PersonAclOutDto } from '../models/PersonAclOutDto';

export interface AllPersonAclsResponse {
  service: ServiceObject;
  payload: Array<PersonAclOutDto>;
}
