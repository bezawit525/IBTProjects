import type { Restaurant } from './restaurant.types';
import type { RestaurantRepository } from './restaurants.repository';
import type { FindRestaurantsQuery } from './dto/find-restaurants.query';
import type { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantNotFoundError } from './restaurant.errors';
import { toPage } from '../common/pagination';
import type { Page } from '../common/page';

function sortRows<T extends Record<string, unknown>>(rows: T[], sort: string): T[] {
  const keys = sort.split(',').map((part) => ({
    key: part.startsWith('-') ? part.slice(1) : part,
    descending: part.startsWith('-'),
  }));
  return [...rows].sort((a, b) => {
    for (const { key, descending } of keys) {
      const result = String(a[key] ?? '').localeCompare(String(b[key] ?? ''));
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

export class RestaurantsService {
  constructor(private readonly repo: RestaurantRepository) {}

  findAll(q: FindRestaurantsQuery): Page<Restaurant> {
    let rows = this.repo.all();
    if (q.area?.length) rows = rows.filter((r) => q.area!.includes(r.area));
    if (q.isOpen !== undefined) rows = rows.filter((r) => r.isOpen === q.isOpen);
    rows = sortRows(rows as unknown as Record<string, unknown>[], q.sort) as unknown as Restaurant[];
    return toPage(selectFields(rows, q.fields), q.limit, q.offset);
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
