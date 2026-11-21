import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { ParseAreaPipe } from '../common/pipes/parse-area.pipe.js';
import type { Area } from './order.types.js';
@Controller({ path: 'orders', version: '1' })
export class OrdersController {
  constructor(private readonly service: OrdersService) {}
  @Get() findAll(@Query('area', ParseAreaPipe) area?: Area) { return this.service.all(area); }
  @Get('slow') slow() { return this.service.slow(); }
  @Get('staff-only')
  @Roles('staff')
  staffOnly() { return { message: 'Staff access granted' }; }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles('staff')
  remove(@Param('id', ParseIntPipe) id: number): void { this.service.remove(id); }
}
