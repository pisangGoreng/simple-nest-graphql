import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { ConfigService } from './services/config/config.service';
import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   console.log('USER PORT ', process.env.USER_SERVICE_PORT);

//   const app = await NestFactory.createMicroservice(AppModule, {
//     transport: Transport.TCP,
//     options: {
//       host: '0.0.0.0',
//       port: new ConfigService().get('port'),
//     },
//   } as TcpOptions);

//   await app.listen();
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('USER PORT ', new ConfigService().get('port'));

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(new ConfigService().get('port'));
}
bootstrap();
