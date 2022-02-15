import { Controller, Get } from '@nestjs/common';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';

import { AppService } from './user.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user_get_by_id')
  public async getHello(): Promise<string> {
    // return this.appService.getHello();
    return 'oke TCP jalan 123';
  }
}
