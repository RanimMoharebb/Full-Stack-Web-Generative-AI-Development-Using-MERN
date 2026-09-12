import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const start = Date.now();

    return next.handle().pipe(
      map((data) => ({
        message: 'Success',
        responseCode: 200,
        timeExecution: new Date().toISOString(),
        duration: `${Date.now() - start}ms`,
        data,
      })),
    );
  }
}