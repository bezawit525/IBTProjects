import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module.js';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter.js';
async function bootstrap() {
 const app=await NestFactory.create(AppModule);
 app.setGlobalPrefix('api');
 app.enableVersioning({type: VersioningType.URI, defaultVersion:'1'});
 app.useGlobalPipes(new ValidationPipe({
  whitelist:true, forbidNonWhitelisted:true, transform:true,
  transformOptions:{enableImplicitConversion:false}, stopAtFirstError:false,
 }));
 app.useGlobalFilters(new AllExceptionsFilter());
 await app.listen(3000);
}
void bootstrap();
