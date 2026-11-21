import type { Restaurant } from './restaurant.types';
import { RESTAURANT_SEED } from './restaurants.seed';

export interface RestaurantRepository {
  all(): Restaurant[];
  byId(id: number): Restaurant | undefined;
  save(restaurant: Restaurant): Restaurant;
}
export class InMemoryRestaurantRepository implements RestaurantRepository {
  private readonly rows = new Map<number, Restaurant>(
    RESTAURANT_SEED.map((r): [number, Restaurant] => [r.id, { ...r }]),
  );
  all(): Restaurant[] { return [...this.rows.values()]; }
  byId(id: number): Restaurant | undefined { return this.rows.get(id); }
  save(r: Restaurant): Restaurant { this.rows.set(r.id, r); return r; }
}
