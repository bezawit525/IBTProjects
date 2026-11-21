import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module.js';
import { RestaurantsModule } from './restaurants/restaurants.module.js';
import { DishesModule } from './dishes/dishes.module.js';
@Module({imports:[RestaurantsModule,DishesModule,OrdersModule]})
export class AppModule {}
