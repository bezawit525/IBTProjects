import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantNotFoundError } from './restaurant.errors';
import { FindRestaurantsQuery } from './dto/find-restaurants.query';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurants: RestaurantsService) {}

  @Get('open')
  findOpen(@Query() query: FindRestaurantsQuery) {
    return this.restaurants.findOpen(query);
  }

  @Get()
  findAll(@Query() query: FindRestaurantsQuery) {
    return this.restaurants.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try { return this.restaurants.findOne(id); }
    catch (error) {
      if (error instanceof RestaurantNotFoundError) throw new NotFoundException(error.message);
      throw error;
    }
  }

  @Post()
  create(@Body() dto: CreateRestaurantDto) {
    return this.restaurants.create(dto);
  }
}
