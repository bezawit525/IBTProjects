export class DishNotFoundError extends Error {
  constructor(public readonly id: number) {
    super(`Dish ${id} was not found`);
    this.name = 'DishNotFoundError';
  }
}

export class RestaurantReferenceError extends Error {
  constructor(public readonly restaurantId: number) {
    super(`Restaurant ${restaurantId} does not exist`);
    this.name = 'RestaurantReferenceError';
  }
}
