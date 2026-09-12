import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : 500;

    response.status(status).json({
      error: exception.message || 'Internal error',
      errorCode: status,
      timeExecution: new Date().toISOString(),
      stack: exception.stack,
    });
  }
}