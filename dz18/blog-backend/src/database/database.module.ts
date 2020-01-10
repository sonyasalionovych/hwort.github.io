import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { ConfigModule } from '../config.module';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
