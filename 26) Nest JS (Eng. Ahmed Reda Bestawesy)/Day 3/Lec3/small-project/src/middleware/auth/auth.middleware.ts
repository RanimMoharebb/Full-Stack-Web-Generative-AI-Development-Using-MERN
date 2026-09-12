import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
      throw new ForbiddenException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'Heloo fro m here',
      });
      console.log(payload);
      if (!payload) {
        throw new UnauthorizedException();
      }
      req['user'] = payload;

      next();
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException();
    }
  }
}
