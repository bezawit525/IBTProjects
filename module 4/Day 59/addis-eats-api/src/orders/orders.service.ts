import { Injectable } from '@nestjs/common';
import { OrderNotFoundError } from '../common/errors/domain.errors.js';
import { orders, type Area, type Order } from './order.types.js';
@Injectable()
export class OrdersService {
  all(area?: Area): Order[] { return area ? orders.filter((order) => order.area === area) : orders; }
  findOne(id: number): Order {
    const order = orders.find((item) => item.id === id);
    if (!order) throw new OrderNotFoundError(id);
    return order;
  }
  remove(id: number): void {
    const index = orders.findIndex((item) => item.id === id);
    if (index < 0) throw new OrderNotFoundError(id);
    orders.splice(index, 1);
  }
  async slow(): Promise<{ message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return { message: 'This response should be timed out before it reaches the client.' };
  }
}
