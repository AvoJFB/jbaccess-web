import { ServiceObject } from './ServiceObject';
import { PersonOutDto } from './PersonOutDto';

export interface AllPersonnelResponse {
  service: ServiceObject;
  payload: Array<PersonOutDto>;
}
