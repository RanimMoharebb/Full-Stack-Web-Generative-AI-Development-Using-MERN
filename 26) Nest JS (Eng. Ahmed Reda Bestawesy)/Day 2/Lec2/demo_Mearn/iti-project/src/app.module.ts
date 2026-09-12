import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppMockService } from './app.mock.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CourcesModule } from './cources/cources.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { AuthMiddleware } from './middleware/auth/auth.middleware';

@Module({
  imports: [UserModule, ProductModule, CourcesModule],
  controllers: [AppController],
  providers: [AppService, AppMockService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        {
          path: '/product/:id',
          method: RequestMethod.GET,
        },
        {
          path: '/product/:id',
          method: RequestMethod.PUT,
        },
      )
      // .forRoutes('product');
      .forRoutes({
        path: '/product',
        method: RequestMethod.POST,
      });
    consumer.apply(AuthMiddleware).forRoutes('user');
  }
}
