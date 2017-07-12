import { GroupOutDto } from './GroupOutDto';

export interface UserOutDto {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
  groups: Array<GroupOutDto>;
}
