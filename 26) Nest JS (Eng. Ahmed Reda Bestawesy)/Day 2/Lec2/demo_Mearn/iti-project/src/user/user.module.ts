import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDeviceModule } from 'src/user-device/user-device.module';

@Module({
  imports: [UserDeviceModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
