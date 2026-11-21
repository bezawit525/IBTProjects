import {
  Body, Controller, Get, Header, NotFoundException, Param, ParseIntPipe,
  Post, Query, Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { RestaurantsService } from './restaurants.service';
import { RestaurantNotFoundError } from './restaurant.errors';
import { FindRestaurantsQuery } from './dto/find-restaurants.query';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller({ path: 'restaurants', version: '1' })
export class RestaurantsController {
  constructor(private readonly restaurants: RestaurantsService) {}

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
  create(@Body() dto: CreateRestaurantDto, @Res({ passthrough: true }) response: Response) {
    const restaurant = this.restaurants.create(dto);
    response.setHeader('Location', `/api/v1/restaurants/${restaurant.id}`);
    return restaurant;
  }
}
