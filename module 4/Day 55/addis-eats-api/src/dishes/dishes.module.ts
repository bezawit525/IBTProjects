import { Module } from '@nestjs/common';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { RESTAURANT_REPOSITORY } from '../restaurants/restaurant.constants';
import type { RestaurantRepository } from '../restaurants/restaurants.repository';
import { DISH_REPOSITORY } from './dish.constants';
import { InMemoryDishRepository, type DishRepository } from './dishes.repository';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';

@Module({
  imports: [RestaurantsModule],
  controllers: [DishesController],
  providers: [
    {
      provide: DISH_REPOSITORY,
      useClass: InMemoryDishRepository,
    },
    {
      provide: DishesService,
      useFactory: (
        dishes: DishRepository,
        restaurants: RestaurantRepository,
      ) => new DishesService(dishes, restaurants),
      inject: [DISH_REPOSITORY, RESTAURANT_REPOSITORY],
    },
  ],
})
export class DishesModule {}
