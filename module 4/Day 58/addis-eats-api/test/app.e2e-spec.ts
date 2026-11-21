import { Test, type TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import request from 'supertest';
import type { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';
import { AllExceptionsFilter } from './../src/common/filters/all-exceptions.filter.js';

describe('Addis Eats API (e2e)', () => {
 let app: INestApplication<App>;
 beforeEach(async () => {
  const moduleFixture:TestingModule=await Test.createTestingModule({imports:[AppModule]}).compile();
  app=moduleFixture.createNestApplication();
  app.setGlobalPrefix('api');
  app.enableVersioning({type:VersioningType.URI,defaultVersion:'1'});
  app.useGlobalPipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true,transformOptions:{enableImplicitConversion:false},stopAtFirstError:false}));
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.init();
 });
 it('GET /api/v1/orders returns the seeded orders',()=>{
  return request(app.getHttpServer()).get('/api/v1/orders').expect(200).expect((res)=>{if(!Array.isArray(res.body))throw new Error('Expected an orders array');});
 });
 it('GET missing order returns the five-field error contract',()=>{
  return request(app.getHttpServer()).get('/api/v1/orders/99999').expect(404).expect((res)=>{
   for(const key of ['statusCode','message','path','timestamp','requestId']) if(!(key in res.body)) throw new Error(`Missing ${key}`);
  });
 });
 afterEach(async()=>{await app.close();});
});
