import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';
import { ParseAreaPipe } from '../common/pipes/parse-area.pipe.js';
@Module({ controllers: [OrdersController], providers: [OrdersService, ParseAreaPipe] })
export class OrdersModule {}
