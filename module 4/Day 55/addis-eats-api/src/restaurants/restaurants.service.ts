import type { Area, Restaurant } from './restaurant.types';
import type { CreateRestaurantDto } from './dto/create-restaurant.dto';
import type { RestaurantRepository } from './restaurants.repository';
import { RestaurantNotFoundError } from './restaurant.errors';

export class RestaurantsService {
  constructor(private readonly repo: RestaurantRepository) {}

  findAll(area?: Area): Restaurant[] {
    const rows = this.repo.all();
    return area ? rows.filter((restaurant) => restaurant.area === area) : rows;
  }

  findOne(id: number): Restaurant {
    const restaurant = this.repo.byId(id);
    if (!restaurant) {
      throw new RestaurantNotFoundError(id);
    }
    return restaurant;
  }

  create(dto: CreateRestaurantDto): Restaurant {
    const id = Math.max(0, ...this.repo.all().map((restaurant) => restaurant.id)) + 1;
    return this.repo.save({
      id,
      name: dto.name,
      area: dto.area,
      isOpen: dto.isOpen ?? true,
    });
  }
}
