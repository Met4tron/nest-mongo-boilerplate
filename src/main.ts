import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { configurations } from './config/environment';
import { VersioningType } from '@nestjs/common';
import fastifyCors from '@fastify/cors';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    })
  );


  app.enableVersioning({
    type: VersioningType.URI,
  })

  // app.enableCors();
  await app.register(fastifyCors)
  await app.listen(configurations.PORT);
}
bootstrap();
