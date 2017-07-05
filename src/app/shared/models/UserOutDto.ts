import { GroupOutDto } from './GroupOutDto';

export interface UserOutDto {
  id: number;
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  groups: Array<GroupOutDto>;
}
