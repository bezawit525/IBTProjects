import {Body,Controller,Get,Param,ParseIntPipe,Patch,Post,Res} from '@nestjs/common';
import type {Response} from 'express';
import {OrdersService} from './orders.service.js';
import {CreateOrderDto} from './dto/create-order.dto.js';
import {UpdateStatusDto} from './dto/update-status.dto.js';
import {RestaurantsService} from '../restaurants/restaurants.service.js';
@Controller({path:'orders',version:'1'})
export class OrdersController {
 constructor(private readonly service:OrdersService){}
 @Get() all(){return this.service.all();}
 @Get(':id') one(@Param('id',ParseIntPipe) id:number){return this.service.findOne(id);}
 @Post() create(@Body() dto:CreateOrderDto,@Res({passthrough:true}) res:Response){
  const order=this.service.create(dto);res.setHeader('Location',`/api/v1/orders/${order.id}`);return order;
 }
 @Patch(':id/status') update(@Param('id',ParseIntPipe) id:number,@Body() dto:UpdateStatusDto){return this.service.updateStatus(id,dto.status);}
}

@Controller({path:'restaurants',version:'1'})
export class RestaurantOrdersController {
 constructor(private readonly service:OrdersService,private readonly restaurants:RestaurantsService){}
 @Get(':id/orders') byRestaurant(@Param('id',ParseIntPipe) id:number) {
  this.restaurants.findOne(id);
  const result=this.service.byRestaurant(id);
  return result;
 }
}
