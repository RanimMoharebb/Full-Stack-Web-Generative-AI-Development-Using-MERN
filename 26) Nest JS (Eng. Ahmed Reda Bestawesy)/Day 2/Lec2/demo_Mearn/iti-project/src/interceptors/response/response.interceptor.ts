import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    const now = Date.now();
    // console.log(res);
    // if (req.url == '/cources') {
    //   res.send('get courcess sucesses');
    // }
    return next.handle().pipe(
      map((data) => {
        // res.send('get courcess sucesses');
        return {
          message: data,
          graduate: 25,
          code: res.statusCode,
        };
      }),
    );
  }
}
