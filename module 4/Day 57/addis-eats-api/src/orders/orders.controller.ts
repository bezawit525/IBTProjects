import {
  BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus,
  NotFoundException, Param, ParseIntPipe, Patch, Post, Query, Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { OrderService } from './order.service';
import { OrderNotFoundError } from './order.errors';
import { RestaurantNotFoundError } from '../restaurants/restaurant.errors';
import { CreateOrderDto } from './dto/create-order.dto';
import { FindOrdersQuery } from './dto/find-orders.query';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller({ path: 'orders', version: '1' })
export class OrdersController {
  constructor(private readonly orders: OrderService) {}

  @Get()
  findAll(@Query() query: FindOrdersQuery) {
    return this.orders.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try { return this.orders.findOne(id); }
    catch (error) {
      if (error instanceof OrderNotFoundError) throw new NotFoundException(error.message);
      throw error;
    }
  }

  @Post()
  create(@Body() dto: CreateOrderDto, @Res({ passthrough: true }) response: Response) {
    try {
      const order = this.orders.create(dto);
      response.setHeader('Location', `/api/v1/orders/${order.id}`);
      return order;
    } catch (error) {
      if (error instanceof RestaurantNotFoundError) throw new BadRequestException(error.message);
      throw error;
    }
  }

  @Patch(':id/status')
  updateStatus(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStatusDto) {
    try { return this.orders.updateStatus(id, dto.status); }
    catch (error) {
      if (error instanceof OrderNotFoundError) throw new NotFoundException(error.message);
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  cancel(@Param('id', ParseIntPipe) id: number): void {
    this.orders.cancel(id);
  }
}

@Controller({ path: 'restaurants', version: '1' })
export class RestaurantOrdersController {
  constructor(private readonly orders: OrderService) {}

  @Get(':id/orders')
  findByRestaurant(@Param('id', ParseIntPipe) id: number, @Query() query: FindOrdersQuery) {
    try { return this.orders.findByRestaurant(id, query); }
    catch (error) {
      if (error instanceof RestaurantNotFoundError) throw new NotFoundException(error.message);
      throw error;
    }
  }
}
