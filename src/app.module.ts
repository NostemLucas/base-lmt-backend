import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'ormconfig';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './common/interceptors';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})
export class AppModule {}
