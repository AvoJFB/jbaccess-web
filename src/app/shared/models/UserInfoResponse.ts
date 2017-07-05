import { ServiceObject } from './ServiceObject';
import { UserOutDto } from './UserOutDto';

export interface UserInfoResponse {
  service: ServiceObject;
  payload: UserOutDto;
}
