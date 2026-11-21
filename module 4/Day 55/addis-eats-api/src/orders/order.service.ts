import type { Area, Order } from './order.types';
import { OrderNotFoundError } from './order.errors';
import type { OrderRepository } from './order.repository';

export class OrderService {
  private readonly cache = new Map<number, Order>();

  constructor(private readonly repo: OrderRepository) {}

  find(id: number): Order {
    const hit = this.cache.get(id) ?? this.repo.byId(id);

    if (!hit) {
      throw new OrderNotFoundError(id);
    }

    this.cache.set(id, hit);

    return hit;
  }

  feesByArea(): Record<Area, number> {
    return {
      Bole: 4000,
      Piassa: 6000,
      Megenagna: 6000,
      Kazanchis: 6000,
    };
  }

  summarise<K extends keyof Order>(key: K): Order[K][] {
    return this.repo.all().map((order) => order[key]);
  }
}
