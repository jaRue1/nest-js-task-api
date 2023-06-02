import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //creatine a new nest js app
  app.useGlobalPipes(new ValidationPipe()); //Implementing global validation on the Application level

  await app.listen(7000);
}
bootstrap();