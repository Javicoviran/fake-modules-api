import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreapiModule } from './coreapi/coreapi.module';
import { BackupModule } from './backup/backup.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [CoreapiModule, BackupModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
