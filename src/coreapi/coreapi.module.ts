import { Module } from '@nestjs/common';
import { CoreapiController } from './coreapi.controller';
import { CoreapiService } from './coreapi.service';

@Module({
  controllers: [CoreapiController],
  providers: [CoreapiService]
})
export class CoreapiModule {}
