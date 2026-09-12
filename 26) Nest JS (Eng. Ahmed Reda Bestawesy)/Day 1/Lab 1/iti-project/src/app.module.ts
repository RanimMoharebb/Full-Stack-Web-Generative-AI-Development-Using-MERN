import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';

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
    UserModule,
    CoursesModule,
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
      useFactory: () => {
        return {
          host: 'localhost',
          port: 27017,
          dbName: 'iti-db',
        };
      },
    },
  ],
})
export class AppModule {}