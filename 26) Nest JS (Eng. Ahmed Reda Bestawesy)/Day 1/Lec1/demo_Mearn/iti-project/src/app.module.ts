import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppMockService } from './app.mock.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, AppMockService],
})
export class AppModule {}
