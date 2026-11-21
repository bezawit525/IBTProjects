import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'node:fs';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true, transformOptions: { enableImplicitConversion: false }, stopAtFirstError: false }));

  const config = new DocumentBuilder()
    .setTitle('Addis Eats API')
    .setDescription('Food delivery for Addis Ababa. Money is in whole santim (100 santim = 1 ETB); TeleBirr phone numbers use the 09xxxxxxxx or +2519xxxxxxxx format. Order totals are computed from menu items on the server.')
    .setVersion('1.0')
    .addTag('restaurants', 'Kitchens that take orders')
    .addTag('dishes', 'Items on a restaurant menu')
    .addTag('orders', 'Customer orders and their status')
    .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' }, 'api-key')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('openapi.json', JSON.stringify(document, null, 2));
  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('docs', app, document, { swaggerOptions: { persistAuthorization: true } });
  }
  await app.listen(process.env.PORT ? Number(process.env.PORT) : 3000);
}
void bootstrap();
