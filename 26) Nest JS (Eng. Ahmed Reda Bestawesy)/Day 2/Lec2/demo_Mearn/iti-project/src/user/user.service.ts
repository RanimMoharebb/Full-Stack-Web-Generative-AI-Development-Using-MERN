import { Injectable } from '@nestjs/common';
import { UserDeviceService } from '../user-device/user-device.service';

@Injectable()
export class UserService {
  constructor(private readonly userDeviceService: UserDeviceService) {}
  getUser(): string {
    return 'user ListFound';
  }
  getUserByID(): string {
    this.userDeviceService.getUserDevice(1211);
    return 'find user with id ';
  }
  addUser(data: string): string {
    return `user created Successfully , ${data}`;
  }
  editUser(data: string): string {
    return `user update Successfully, ${data}`;
  }
  deleteUser(id: number): string {
    return `user deleted Successfully, ${id}`;
  }
}
