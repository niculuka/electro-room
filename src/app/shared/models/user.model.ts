import { ROLE } from 'src/app/shared/enums/electro.enum';

export class User {
  id: number | undefined;
  username: string = "";
  password: string = "";
  name: string = "";
  email: string = "";
  phone: string = "";
  address: string = "";
  createTime: Date = new Date("dd-MM-yyyy, H:mm");
  enabled: boolean = false;
  oldPassword: string = "";
  newPassword: string = "";
  token: string = "";
  role: ROLE = ROLE.USER;  
}

export interface IUser {
  id: number | undefined;
  username: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createTime: Date;
  enabled: boolean;
  token: string;
  role: ROLE;
}
