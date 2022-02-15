import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { AppService } from './user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
