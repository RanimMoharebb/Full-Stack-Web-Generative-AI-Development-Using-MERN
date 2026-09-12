import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('server start and listen to port 3000');
}
bootstrap();
