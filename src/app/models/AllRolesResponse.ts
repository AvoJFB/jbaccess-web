import { ServiceObject } from './ServiceObject';
import { RoleOutDto } from './RoleOutDto';

export interface AllRolesResponse {
  service: ServiceObject;
  payload: Array<RoleOutDto>;
}
