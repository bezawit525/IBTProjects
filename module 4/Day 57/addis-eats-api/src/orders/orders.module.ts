import { Module } from '@nestjs/common';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { RESTAURANT_REPOSITORY } from '../restaurants/restaurant.constants';
import type { RestaurantRepository } from '../restaurants/restaurants.repository';
import { ORDER_REPOSITORY } from './order.constants';
import { InMemoryOrderRepository, type OrderRepository } from './order.repository';
import { ORDER_SEED } from './orders.seed';
import { OrderService } from './order.service';
import { OrdersController, RestaurantOrdersController } from './orders.controller';

@Module({
  imports: [RestaurantsModule],
  controllers: [OrdersController, RestaurantOrdersController],
  providers: [
    { provide: ORDER_REPOSITORY, useFactory: () => new InMemoryOrderRepository(ORDER_SEED) },
    {
      provide: OrderService,
      useFactory: (orders: OrderRepository, restaurants: RestaurantRepository) =>
        new OrderService(orders, restaurants),
      inject: [ORDER_REPOSITORY, RESTAURANT_REPOSITORY],
    },
  ],
  exports: [OrderService],
})
export class OrdersModule {}
