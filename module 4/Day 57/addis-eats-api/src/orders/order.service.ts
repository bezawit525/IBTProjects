import type { Order, OrderStatus } from './order.types';
import type { OrderRepository } from './order.repository';
import type { RestaurantRepository } from '../restaurants/restaurants.repository';
import type { CreateOrderDto } from './dto/create-order.dto';
import type { FindOrdersQuery } from './dto/find-orders.query';
import { OrderNotFoundError } from './order.errors';
import { RestaurantNotFoundError } from '../restaurants/restaurant.errors';
import { toPage } from '../common/pagination';
import type { Page } from '../common/page';

function sortRows<T extends Record<string, unknown>>(rows: T[], sort: string): T[] {
  const keys = sort.split(',').map((part) => ({
    key: part.startsWith('-') ? part.slice(1) : part,
    descending: part.startsWith('-'),
  }));
  return [...rows].sort((a, b) => {
    for (const { key, descending } of keys) {
      const left = a[key];
      const right = b[key];
      const result = typeof left === 'number' && typeof right === 'number'
        ? left - right
        : String(left ?? '').localeCompare(String(right ?? ''));
      if (result !== 0) return descending ? -result : result;
    }
    return 0;
  });
}

function selectFields<T extends object>(rows: T[], fields?: string[]): T[] {
  if (!fields?.length) return rows;
  return rows.map((row) => Object.fromEntries(
    fields.filter((field) => field in row).map((field) => [field, (row as Record<string, unknown>)[field]]),
  ) as T);
}

export class OrderService {
  constructor(
    private readonly repo: OrderRepository,
    private readonly restaurants: RestaurantRepository,
  ) {}

  findAll(q: FindOrdersQuery): Page<Order> {
    let rows = this.repo.all();
    if (q.status?.length) rows = rows.filter((o) => q.status!.includes(o.status));
    if (q.area?.length) rows = rows.filter((o) => q.area!.includes(o.area));
    rows = sortRows(rows as unknown as Record<string, unknown>[], q.sort) as unknown as Order[];
    rows = selectFields(rows, q.fields);
    return toPage(rows, q.limit, q.offset);
  }

  findOne(id: number): Order {
    const order = this.repo.byId(id);
    if (!order) throw new OrderNotFoundError(id);
    return order;
  }

  findByRestaurant(restaurantId: number, q: FindOrdersQuery): Page<Order> {
    if (!this.restaurants.byId(restaurantId)) throw new RestaurantNotFoundError(restaurantId);
    let rows = this.repo.all().filter((order) => order.restaurantId === restaurantId);
    if (q.status?.length) rows = rows.filter((o) => q.status!.includes(o.status));
    if (q.area?.length) rows = rows.filter((o) => q.area!.includes(o.area));
    rows = sortRows(rows as unknown as Record<string, unknown>[], q.sort) as unknown as Order[];
    return toPage(selectFields(rows, q.fields), q.limit, q.offset);
  }

  create(dto: CreateOrderDto): Order {
    if (!this.restaurants.byId(dto.restaurantId)) {
      throw new RestaurantNotFoundError(dto.restaurantId);
    }
    const id = Math.max(0, ...this.repo.all().map((o) => o.id)) + 1;
    return this.repo.save({ id, ...dto, status: 'pending' });
  }

  updateStatus(id: number, status: OrderStatus): Order {
    const order = this.findOne(id);
    return this.repo.save({ ...order, status });
  }

  cancel(id: number): void {
    // DELETE is idempotent: deleting an already absent resource is still success.
    this.repo.delete(id);
  }
}
