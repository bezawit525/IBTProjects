import type { Dish } from './dish.types';
import type { DishRepository } from './dishes.repository';
import type { FindDishesQuery } from './dto/find-dishes.query';
import { toPage } from '../common/pagination';
import type { Page } from '../common/page';

function sortRows(rows: Dish[], sort: string): Dish[] {
  const keys = sort.split(',').map((part) => ({
    key: part.startsWith('-') ? part.slice(1) : part,
    descending: part.startsWith('-'),
  }));
  return [...rows].sort((a, b) => {
    for (const { key, descending } of keys) {
      const left = a[key as keyof Dish];
      const right = b[key as keyof Dish];
      const result = typeof left === 'number' && typeof right === 'number'
        ? left - right
        : String(left).localeCompare(String(right));
      if (result !== 0) return descending ? -result : result;
    }
    return 0;
  });
}
function selectFields(rows: Dish[], fields?: string[]): Dish[] {
  if (!fields?.length) return rows;
  return rows.map((row) => Object.fromEntries(
    fields.filter((field) => field in row).map((field) => [field, row[field as keyof Dish]]),
  ) as Dish);
}

export class DishesService {
  constructor(private readonly repo: DishRepository) {}
  findAll(q: FindDishesQuery): Page<Dish> {
    const rows = q.restaurantId === undefined ? this.repo.all() : this.repo.byRestaurantId(q.restaurantId);
    return toPage(selectFields(sortRows(rows, q.sort), q.fields), q.limit, q.offset);
  }
  findByRestaurant(id: number, q: FindDishesQuery): Page<Dish> {
    return toPage(selectFields(sortRows(this.repo.byRestaurantId(id), q.sort), q.fields), q.limit, q.offset);
  }
  findOne(id: number): Dish | undefined { return this.repo.byId(id); }
}
