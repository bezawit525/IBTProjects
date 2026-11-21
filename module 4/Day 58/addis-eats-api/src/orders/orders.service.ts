import {Injectable} from '@nestjs/common';
import {orders,type Order,type OrderStatus} from './order.types.js';
import {dishes} from '../dishes/dish.types.js';
import {RestaurantsService} from '../restaurants/restaurants.service.js';
import {OrderNotFoundError,RestaurantClosedError,DishNotOnMenuError,InvalidTransitionError,DishNotFoundError} from '../common/errors/domain.errors.js';
import type {CreateOrderDto} from './dto/create-order.dto.js';
const ALLOWED:Record<OrderStatus,readonly OrderStatus[]>={PENDING:['PREPARING','CANCELLED'],PREPARING:['ON_THE_WAY','CANCELLED'],ON_THE_WAY:['DELIVERED'],DELIVERED:[],CANCELLED:[]};
@Injectable()
export class OrdersService {
 constructor(private readonly restaurants:RestaurantsService){}
 all():Order[]{return orders;}
 byRestaurant(restaurantId:number):Order[]{return orders.filter(o=>o.restaurantId===restaurantId);}
 findOne(id:number):Order{const o=orders.find(x=>x.id===id);if(!o)throw new OrderNotFoundError(id);return o;}
 create(dto:CreateOrderDto):Order {
  const restaurant=this.restaurants.findOne(dto.restaurantId);
  if(!restaurant.isOpen)throw new RestaurantClosedError(restaurant.id);
  const selected=dishes.filter(d=>dto.lines.some(line=>line.dishId===d.id));
  if(selected.length!==new Set(dto.lines.map(l=>l.dishId)).size) { const missing=dto.lines.find(l=>!dishes.some(d=>d.id===l.dishId)); throw new DishNotFoundError(missing?.dishId??0); }
  if(selected.some(d=>d.restaurantId!==restaurant.id))throw new DishNotOnMenuError(restaurant.id);
  // Recalculate from server-side dish prices; never persist the client's submitted total.
  const totalSantim=dto.lines.reduce((sum,line)=>sum+(dishes.find(d=>d.id===line.dishId)?.priceSantim??0)*line.quantity,0);
  const order:Order={id:Math.max(0,...orders.map(o=>o.id))+1,customer:dto.customer,restaurantId:restaurant.id,area:dto.area,phone:dto.phone,lines:dto.lines,totalSantim,status:'PENDING',isScheduled:dto.isScheduled,scheduledFor:dto.scheduledFor};
  orders.push(order);return order;
 }
 updateStatus(id:number,next:OrderStatus):Order {
  const order=this.findOne(id);
  if(!ALLOWED[order.status].includes(next))throw new InvalidTransitionError(order.status,next);
  order.status=next;return order;
 }
}
