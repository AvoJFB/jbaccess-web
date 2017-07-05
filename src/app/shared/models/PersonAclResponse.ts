import { ServiceObject } from './ServiceObject';
import { PersonAclOutDto } from './PersonAclOutDto';

export interface PersonAclResponse {
  service: ServiceObject;
  payload: PersonAclOutDto;
}
