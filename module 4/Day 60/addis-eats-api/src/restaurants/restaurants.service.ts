import { Injectable, NotFoundException } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { restaurants, type Restaurant } from './restaurant.types.js';
@Injectable() export class RestaurantsService {
 constructor(private readonly logger:PinoLogger){this.logger.setContext(RestaurantsService.name);}
 findAll():Restaurant[]{this.logger.info({count:restaurants.length},'restaurants listed');return restaurants;}
 findOne(id:number):Restaurant{const item=restaurants.find(x=>x.id===id);if(!item)throw new NotFoundException(`Restaurant ${id} not found`);return item;}
 findDishes(id:number){const restaurant=this.findOne(id);return {restaurantId:id,restaurant:restaurant.name,dishes:[{id:1,name:'Kitfo',priceSantim:35000},{id:2,name:'Shiro',priceSantim:25000}]};}
}
