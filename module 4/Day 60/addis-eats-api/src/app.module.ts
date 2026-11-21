import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { loggerConfig } from './common/logger.config.js';
import { OrdersModule } from './orders/orders.module.js';
import { RestaurantsModule } from './restaurants/restaurants.module.js';
import { DishesModule } from './dishes/dishes.module.js';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware.js';
import { ConfigService } from './common/config.service.js';
import { ApiKeyGuard } from './common/guards/api-key.guard.js';
import { RolesGuard } from './common/guards/roles.guard.js';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor.js';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor.js';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter.js';
@Module({
  imports: [LoggerModule.forRoot(loggerConfig), RestaurantsModule, DishesModule, OrdersModule],
  providers: [ConfigService, { provide: APP_GUARD, useClass: ApiKeyGuard }, { provide: APP_GUARD, useClass: RolesGuard }, { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }, { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor }, { provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void { consumer.apply(RequestIdMiddleware).forRoutes('*'); }
}
