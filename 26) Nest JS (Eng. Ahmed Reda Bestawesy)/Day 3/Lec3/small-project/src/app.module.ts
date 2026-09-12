import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // for DB connections
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: '/users', method: RequestMethod.POST },
        ProductsController,
      );
  }
}
