import { ServiceObject } from './ServiceObject';
import { PersonAclOutDto } from './PersonAclOutDto';

export interface AllPersonAclsResponse {
  service: ServiceObject;
  payload: Array<PersonAclOutDto>;
}
