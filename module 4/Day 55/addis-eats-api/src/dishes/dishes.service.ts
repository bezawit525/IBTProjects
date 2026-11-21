import type { Dish } from './dish.types';
import type { CreateDishDto } from './dto/create-dish.dto';
import type { DishRepository } from './dishes.repository';
import type { RestaurantRepository } from '../restaurants/restaurants.repository';
import { DishNotFoundError, RestaurantReferenceError } from './dish.errors';

export class DishesService {
  constructor(
    private readonly dishes: DishRepository,
    private readonly restaurants: RestaurantRepository,
  ) {}

  findAll(restaurantId?: number): Dish[] {
    return restaurantId === undefined
      ? this.dishes.all()
      : this.dishes.byRestaurantId(restaurantId);
  }

  findOne(id: number): Dish {
    const dish = this.dishes.byId(id);
    if (!dish) {
      throw new DishNotFoundError(id);
    }
    return dish;
  }

  create(dto: CreateDishDto): Dish {
    if (!this.restaurants.byId(dto.restaurantId)) {
      throw new RestaurantReferenceError(dto.restaurantId);
    }

    const id = Math.max(0, ...this.dishes.all().map((dish) => dish.id)) + 1;
    return this.dishes.save({
      id,
      restaurantId: dto.restaurantId,
      name: dto.name,
      priceSantim: dto.priceSantim,
    });
  }
}
