import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantNotFoundError } from './restaurant.errors';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import type { Area } from './restaurant.types';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurants: RestaurantsService) {}

  @Get()
  findAll(@Query('area') area?: string) {
    if (area !== undefined && !['Bole', 'Kazanchis', 'Piassa', 'Megenagna'].includes(area)) {
      throw new BadRequestException('area must be one of Bole, Kazanchis, Piassa, Megenagna');
    }
    return this.restaurants.findAll(area as Area | undefined);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.restaurants.findOne(id);
    } catch (error: unknown) {
      if (error instanceof RestaurantNotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Post()
  create(@Body() dto: CreateRestaurantDto) {
    return this.restaurants.create(dto);
  }
}
