import { Module } from '@nestjs/common';
import { RESTAURANT_REPOSITORY } from './restaurant.constants';
import { InMemoryRestaurantRepository } from './restaurants.repository';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';

@Module({
  controllers: [RestaurantsController],
  providers: [
    { provide: RESTAURANT_REPOSITORY, useClass: InMemoryRestaurantRepository },
    {
      provide: RestaurantsService,
      useFactory: (repo: InMemoryRestaurantRepository) => new RestaurantsService(repo),
      inject: [RESTAURANT_REPOSITORY],
    },
  ],
  exports: [RESTAURANT_REPOSITORY, RestaurantsService],
})
export class RestaurantsModule {}
