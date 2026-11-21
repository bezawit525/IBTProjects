import type { Order } from './order.types';

export interface OrderRepository {
  all(): Order[];
  byId(id: number): Order | undefined;
  save(order: Order): Order;
  delete(id: number): void;
}

export class InMemoryOrderRepository implements OrderRepository {
  private readonly rows = new Map<number, Order>();

  constructor(initial: Order[] = []) {
    initial.forEach((order) => this.rows.set(order.id, { ...order }));
  }

  all(): Order[] { return [...this.rows.values()]; }
  byId(id: number): Order | undefined { return this.rows.get(id); }
  save(order: Order): Order { this.rows.set(order.id, order); return order; }
  delete(id: number): void { this.rows.delete(id); }
}
