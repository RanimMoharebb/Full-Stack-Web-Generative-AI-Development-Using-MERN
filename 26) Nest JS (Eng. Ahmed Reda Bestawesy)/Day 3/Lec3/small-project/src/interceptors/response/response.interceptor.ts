import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res: Response = ctx.getResponse();
    let now = new Date();
    return next.handle().pipe(
      map((data) => {
        return {
          data: data,
          status: res.statusCode,
        };
      }),
      tap((data) => {
        console.log(data);
      }),
    );
  }
}
