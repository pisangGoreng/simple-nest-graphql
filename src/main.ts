import { NestFactory } from '@nestjs/core';
import { AppModule } from './user.module';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  console.log('GATEWAY PORT ', process.env.USER_SERVICE_PORT);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
