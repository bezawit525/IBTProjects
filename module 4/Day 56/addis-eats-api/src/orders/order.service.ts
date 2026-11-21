import type { Order, OrderStatus } from './order.types';
import type { OrderRepository } from './order.repository';
import type { RestaurantRepository } from '../restaurants/restaurants.repository';
import type { CreateOrderDto } from './dto/create-order.dto';
import type { FindOrdersQuery } from './dto/find-orders.query';
import { OrderNotFoundError } from './order.errors';
import { RestaurantNotFoundError } from '../restaurants/restaurant.errors';
import { toPage } from '../common/pagination';
import type { Page } from '../common/page';

export class OrderService {
  constructor(
    private readonly repo: OrderRepository,
    private readonly restaurants: RestaurantRepository,
  ) {}

  findAll(q: FindOrdersQuery): Page<Order> {
    let rows = this.repo.all();
    if (q.status) rows = rows.filter((o) => o.status === q.status);
    if (q.area) rows = rows.filter((o) => o.area === q.area);

    rows = [...rows].sort((a, b) => {
      const av = a[q.sort];
      const bv = b[q.sort];
      return typeof av === 'number' && typeof bv === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv));
    });

    return toPage(rows, q.limit, q.offset);
  }

  findPending(q: FindOrdersQuery): Page<Order> {
    let rows = this.repo.all().filter((order) => order.status === 'pending');
    if (q.area) rows = rows.filter((order) => order.area === q.area);
    rows = [...rows].sort((a, b) => {
      const av = a[q.sort];
      const bv = b[q.sort];
      return typeof av === 'number' && typeof bv === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv));
    });
    return toPage(rows, q.limit, q.offset);
  }

  findOne(id: number): Order {
    const order = this.repo.byId(id);
    if (!order) throw new OrderNotFoundError(id);
    return order;
  }

  findByRestaurant(restaurantId: number, q: FindOrdersQuery): Page<Order> {
    if (!this.restaurants.byId(restaurantId)) {
      throw new RestaurantNotFoundError(restaurantId);
    }
    let rows = this.repo.all().filter((order) => order.restaurantId === restaurantId);
    if (q.status) rows = rows.filter((order) => order.status === q.status);
    if (q.area) rows = rows.filter((order) => order.area === q.area);
    rows = [...rows].sort((a, b) => {
      const av = a[q.sort];
      const bv = b[q.sort];
      return typeof av === 'number' && typeof bv === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv));
    });
    return toPage(rows, q.limit, q.offset);
  }

  create(dto: CreateOrderDto): Order {
    if (!this.restaurants.byId(dto.restaurantId)) {
      throw new Error(`Restaurant ${dto.restaurantId} does not exist`);
    }
    const id = Math.max(0, ...this.repo.all().map((o) => o.id)) + 1;
    return this.repo.save({ id, ...dto, status: 'pending' });
  }

  updateStatus(id: number, status: OrderStatus): Order {
    const order = this.findOne(id);
    return this.repo.save({ ...order, status });
  }

  cancel(id: number): void {
    this.findOne(id);
    this.repo.delete(id);
  }
}
