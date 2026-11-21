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
import { DishesService } from './dishes.service';
import { DishNotFoundError, RestaurantReferenceError } from './dish.errors';
import { CreateDishDto } from './dto/create-dish.dto';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishes: DishesService) {}

  @Get()
  findAll(@Query('restaurantId') restaurantId?: string) {
    if (restaurantId === undefined) {
      return this.dishes.findAll();
    }

    const parsedId = Number(restaurantId);
    if (!Number.isInteger(parsedId) || parsedId < 1) {
      throw new BadRequestException('restaurantId must be a positive integer');
    }

    return this.dishes.findAll(parsedId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.dishes.findOne(id);
    } catch (error: unknown) {
      if (error instanceof DishNotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Post()
  create(@Body() dto: CreateDishDto) {
    try {
      return this.dishes.create(dto);
    } catch (error: unknown) {
      if (error instanceof RestaurantReferenceError) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }
}
