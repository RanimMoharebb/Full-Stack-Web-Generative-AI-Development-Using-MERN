import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    const auth = req.headers.authorization;

    if (!auth) {
      throw new UnauthorizedException('No token');
    }

    const token = auth.split(' ')[1];

    try {
      const decoded = jwt.verify(token, 'SECRET_KEY');
      req.user = decoded;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}