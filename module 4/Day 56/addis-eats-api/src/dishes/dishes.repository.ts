import type { Dish } from './dish.types';
import { DISH_SEED } from './dishes.seed';
export interface DishRepository {
  all(): Dish[];
  byId(id: number): Dish | undefined;
  byRestaurantId(id: number): Dish[];
  save(dish: Dish): Dish;
}
export class InMemoryDishRepository implements DishRepository {
  private readonly rows = new Map<number, Dish>(DISH_SEED.map((d): [number, Dish] => [d.id, { ...d }]));
  all(): Dish[] { return [...this.rows.values()]; }
  byId(id: number): Dish | undefined { return this.rows.get(id); }
  byRestaurantId(id: number): Dish[] { return this.all().filter((d) => d.restaurantId === id); }
  save(d: Dish): Dish { this.rows.set(d.id, d); return d; }
}
