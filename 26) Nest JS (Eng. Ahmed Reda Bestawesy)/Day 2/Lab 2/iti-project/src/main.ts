import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// Add static serving
import { NestExpressApplication } from '@nestjs/platform-express';
// Add static serving
import { join } from 'path';

import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { TransformInterceptor } from './transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Global Pipes (Validation)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Global Interceptor (transform.interceptor.ts)
  app.useGlobalInterceptors(new TransformInterceptor());

  // Global Exception Filter (http-exception.filter.ts)
  app.useGlobalFilters(new HttpExceptionFilter());

  // Serve uploaded files (Add static serving)
  app.useStaticAssets(join(__dirname, '..', 'uploads'));

  await app.listen(4000);

  console.log('Server running on port 4000');
}

bootstrap();