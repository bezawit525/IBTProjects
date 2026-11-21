import { Module } from '@nestjs/common';
import { RESTAURANT_REPOSITORY } from './restaurant.constants';
import { InMemoryRestaurantRepository } from './restaurants.repository';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';

@Module({
  controllers: [RestaurantsController],
  providers: [
    {
      provide: RESTAURANT_REPOSITORY,
      useClass: InMemoryRestaurantRepository,
    },
    {
      provide: RestaurantsService,
      useFactory: (repository: InMemoryRestaurantRepository) =>
        new RestaurantsService(repository),
      inject: [RESTAURANT_REPOSITORY],
    },
  ],
  exports: [RESTAURANT_REPOSITORY],
})
export class RestaurantsModule {}
