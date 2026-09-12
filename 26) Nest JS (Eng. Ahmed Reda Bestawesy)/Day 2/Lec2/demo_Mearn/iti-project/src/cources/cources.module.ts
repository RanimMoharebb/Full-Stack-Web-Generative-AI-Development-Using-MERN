import { Module } from '@nestjs/common';
import { CourcesService } from './cources.service';
import { CourcesController } from './cources.controller';

@Module({
  controllers: [CourcesController],
  providers: [CourcesService],
})
export class CourcesModule {}
