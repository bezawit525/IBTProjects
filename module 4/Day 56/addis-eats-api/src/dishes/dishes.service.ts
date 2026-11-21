import type { Dish } from './dish.types';
import type { DishRepository } from './dishes.repository';
import type { FindDishesQuery } from './dto/find-dishes.query';
import { toPage } from '../common/pagination';
import type { Page } from '../common/page';
export class DishesService {
  constructor(private readonly repo: DishRepository) {}
  findAll(q: FindDishesQuery): Page<Dish> {
    const rows = q.restaurantId === undefined ? this.repo.all() : this.repo.byRestaurantId(q.restaurantId);
    return toPage(rows, q.limit, q.offset);
  }
  findByRestaurant(id: number, q: FindDishesQuery): Page<Dish> {
    return toPage(this.repo.byRestaurantId(id), q.limit, q.offset);
  }
  findOne(id: number): Dish | undefined { return this.repo.byId(id); }
}
