import {
  Module,
  MiddlewareConsumer,
  NestModule,
} from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger/logger.middleware';

class DevelopmentLogger {
  log(message: string) {
    console.log('[DEV]', message);
  }
}

class ProductionLogger {
  log(message: string) {
    console.log('[PROD]', message);
  }
}

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/iti-db'),
    UserModule,
    CoursesModule,
    AuthModule, // FOR LAB 3
  ],

  providers: [
    {
      provide: 'APP_NAME',
      useValue: 'ITI NestJS Project',
    },
    {
      provide: 'LOGGER',
      useClass: DevelopmentLogger,
    },
    {
      provide: 'DATABASE_CONFIG',
      useFactory: () => ({
        host: 'localhost',
        port: 27017,
        dbName: 'iti-db',
      }),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // global middleware
  }
}