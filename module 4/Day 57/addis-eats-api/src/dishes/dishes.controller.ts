import { Controller, Get, NotFoundException, Param, ParseIntPipe, Query } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { RestaurantNotFoundError } from '../restaurants/restaurant.errors';
import { FindDishesQuery } from './dto/find-dishes.query';

@Controller({ path: 'dishes', version: '1' })
export class DishesController {
  constructor(private readonly dishes: DishesService) {}
  @Get()
  findAll(@Query() query: FindDishesQuery) { return this.dishes.findAll(query); }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const dish = this.dishes.findOne(id);
    if (!dish) throw new NotFoundException(`Dish ${id} was not found`);
    return dish;
  }
}

@Controller({ path: 'restaurants', version: '1' })
export class RestaurantDishesController {
  constructor(private readonly restaurants: RestaurantsService, private readonly dishes: DishesService) {}
  @Get(':id/dishes')
  findByRestaurant(@Param('id', ParseIntPipe) id: number, @Query() query: FindDishesQuery) {
    try { this.restaurants.findOne(id); }
    catch (error) {
      if (error instanceof RestaurantNotFoundError) throw new NotFoundException(error.message);
      throw error;
    }
    return this.dishes.findByRestaurant(id, query);
  }
}
