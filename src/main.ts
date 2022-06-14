import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log('process.env.MONGO ', process.env.MONGO )
  console.log('process.env.PORT ', process.env.PORT )
}
bootstrap();
