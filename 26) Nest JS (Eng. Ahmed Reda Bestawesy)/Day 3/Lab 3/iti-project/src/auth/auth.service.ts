import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    //private userService: any, 
    private userService: UserService,
  ) {}

  async signup(userDto: any) {
    const hashed = await bcrypt.hash(userDto.password, 10);

    return this.userService.create({
      ...userDto,
      password: hashed,
      role: 'user',
    });
  }

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      token: this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: user.role,
      }),
    };
  }
}