import { ServiceObject } from './ServiceObject';
import { KeyOutDto } from './KeyOutDto';

export interface AllKeysResponse {
  service: ServiceObject;
  payload: Array<KeyOutDto>;
}
