import { Module } from '@nestjs/common';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { DISH_REPOSITORY } from './dish.constants';
import { InMemoryDishRepository } from './dishes.repository';
import { DishesService } from './dishes.service';
import { DishesController, RestaurantDishesController } from './dishes.controller';
@Module({
  imports: [RestaurantsModule],
  controllers: [DishesController, RestaurantDishesController],
  providers: [
    { provide: DISH_REPOSITORY, useClass: InMemoryDishRepository },
    {
      provide: DishesService,
      useFactory: (repo: InMemoryDishRepository) => new DishesService(repo),
      inject: [DISH_REPOSITORY],
    },
  ],
  exports: [DishesService],
})
export class DishesModule {}
