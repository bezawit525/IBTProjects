import { Test, type TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import request from 'supertest';
import type { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Addis Eats API — Day 59', () => {
  let app: INestApplication<App>;
  beforeEach(async () => {
    process.env.API_KEY = 'test-day59-key';
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
  });
  afterEach(async () => { await app.close(); });

  it('generates a request id response header', () =>
    request(app.getHttpServer()).get('/api/v1/orders').expect(200).expect((res) => {
      if (!res.headers['x-request-id']) throw new Error('Missing x-request-id header');
    }));

  it('honours a caller-supplied request id', () =>
    request(app.getHttpServer()).get('/api/v1/orders').set('x-request-id', 'mine-123').expect(200).expect('x-request-id', 'mine-123'));

  it('includes the same request id in the global error body', () =>
    request(app.getHttpServer()).get('/api/v1/orders/99999').set('x-request-id', 'error-123').expect(404).expect((res) => {
      if (res.body.requestId !== 'error-123') throw new Error('Error body requestId did not match header');
    }));

  it('returns 401 for a missing API key and 403 for a wrong one', async () => {
    await request(app.getHttpServer()).delete('/api/v1/orders/1').expect(401);
    await request(app.getHttpServer()).delete('/api/v1/orders/1').set('x-api-key', 'wrong').expect(403);
  });

  it('blocks a caller without the staff role', () =>
    request(app.getHttpServer()).get('/api/v1/orders/staff-only').expect(403));

  it('normalises area query values and rejects unknown areas', async () => {
    await request(app.getHttpServer()).get('/api/v1/orders?area=BOLE').expect(200).expect((res) => {
      if (res.body[0]?.area !== 'Bole') throw new Error('Area was not normalised');
    });
    await request(app.getHttpServer()).get('/api/v1/orders?area=adama').expect(400);
  });
});
