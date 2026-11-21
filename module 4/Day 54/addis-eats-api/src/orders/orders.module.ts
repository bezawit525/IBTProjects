import { Module } from '@nestjs/common';
import { seedOrders } from '../seed-orders';
import { ORDER_REPOSITORY } from './order.constants';
import { InMemoryOrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [
    OrderService,
    {
      provide: ORDER_REPOSITORY,
      useFactory: () => new InMemoryOrderRepository(seedOrders),
    },
  ],
})
export class OrdersModule {}
