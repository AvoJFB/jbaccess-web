import { ServiceObject } from './ServiceObject';
import { PersonOutDto } from './PersonOutDto';

export interface PersonResponse {
  service: ServiceObject;
  payload: PersonOutDto;
}
