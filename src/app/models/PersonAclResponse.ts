import { ServiceObject } from '../models/ServiceObject';
import { PersonAclOutDto } from '../models/PersonAclOutDto';

export interface PersonAclResponse {
  service: ServiceObject;
  payload: PersonAclOutDto;
}
