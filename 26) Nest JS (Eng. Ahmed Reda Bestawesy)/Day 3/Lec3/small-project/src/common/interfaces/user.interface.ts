import { userGender } from '../enums/user.gender.enum';

export interface Iuser {
  id?: number;
  name: string;
  age: number;
  gender: userGender;
  password: string;
  email: string;
}
