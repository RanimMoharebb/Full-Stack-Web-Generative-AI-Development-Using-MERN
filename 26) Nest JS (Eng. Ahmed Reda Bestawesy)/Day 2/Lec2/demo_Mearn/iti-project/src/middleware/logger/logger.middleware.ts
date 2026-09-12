import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.url);
    console.log(req.headers);
    const token: string = req.headers.authorization as string;
    console.log(token);
    if (!token) {
      throw new UnauthorizedException();
    }
    next();
  }
}
