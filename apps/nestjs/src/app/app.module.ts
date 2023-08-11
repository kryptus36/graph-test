import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestjsLibModule } from '@graph-test/nestjs-lib';

@Module({
  imports: [NestjsLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
