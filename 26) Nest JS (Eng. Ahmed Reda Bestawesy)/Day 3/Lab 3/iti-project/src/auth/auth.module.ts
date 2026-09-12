import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule, // gives access to UserService
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
  ],

  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}