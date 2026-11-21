import type { Restaurant } from './restaurant.types';
import type { RestaurantRepository } from './restaurants.repository';
import type { FindRestaurantsQuery } from './dto/find-restaurants.query';
import type { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantNotFoundError } from './restaurant.errors';
import { toPage } from '../common/pagination';
import type { Page } from '../common/page';

export class RestaurantsService {
  constructor(private readonly repo: RestaurantRepository) {}
  findAll(q: FindRestaurantsQuery): Page<Restaurant> {
    let rows = this.repo.all();
    if (q.area) rows = rows.filter((r) => r.area === q.area);
    if (q.isOpen !== undefined) rows = rows.filter((r) => r.isOpen === q.isOpen);
    rows = [...rows].sort((a, b) => a[q.sort].localeCompare(b[q.sort]));
    return toPage(rows, q.limit, q.offset);
  }
  findOpen(q: FindRestaurantsQuery): Page<Restaurant> {
    return this.findAll({ ...q, isOpen: true });
  }
  findOne(id: number): Restaurant {
    const restaurant = this.repo.byId(id);
    if (!restaurant) throw new RestaurantNotFoundError(id);
    return restaurant;
  }
  create(dto: CreateRestaurantDto): Restaurant {
    const id = Math.max(0, ...this.repo.all().map((r) => r.id)) + 1;
    return this.repo.save({ id, name: dto.name, area: dto.area, isOpen: dto.isOpen ?? true });
  }
}
