import { Roles } from './roles';

export interface Profile {
  name: string;
  secondName: string;
  address: string;
  cp: string;
  city: string;
  email: string;
  img: string;
  phone: string;
  role: Roles;
  active: boolean;
  fullName: string;
}
