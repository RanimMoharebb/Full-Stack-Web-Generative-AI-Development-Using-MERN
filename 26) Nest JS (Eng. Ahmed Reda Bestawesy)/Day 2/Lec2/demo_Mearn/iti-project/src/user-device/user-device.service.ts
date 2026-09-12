import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDeviceService {
  getUserDevice(userId: number): string {
    return `get user Device , ${userId}`;
  }
}
