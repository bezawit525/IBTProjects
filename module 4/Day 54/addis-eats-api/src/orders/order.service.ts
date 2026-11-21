import { Inject, Injectable } from '@nestjs/common';
import { OrderNotFoundError } from './order.errors';
import { ORDER_REPOSITORY } from './order.constants';
import type { CreateOrderDto } from './dto/create-order.dto';
import type { Order } from './order.types';
import type { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  private readonly cache = new Map<number, Order>();

  constructor(
    @Inject(ORDER_REPOSITORY)
    private readonly repo: OrderRepository,
  ) {}

  all(): Order[] {
    return this.repo.all();
  }

  find(id: number): Order {
    const hit = this.cache.get(id) ?? this.repo.byId(id);

    if (!hit) {
      throw new OrderNotFoundError(id);
    }

    this.cache.set(id, hit);
    return hit;
  }

  create(dto: CreateOrderDto): Order {
    const orders = this.repo.all();
    const nextId = orders.reduce((max, order) => Math.max(max, order.id), 0) + 1;

    const order: Order = {
      id: nextId,
      customerName: dto.customer,
      area: dto.area,
      status: 'pending',
      dishes: [],
      ...(dto.phone ? { teleBirrPhone: dto.phone } : {}),
      total: dto.totalSantim,
    };

    return this.repo.save(order);
  }
}
