export class RestaurantNotFoundError extends Error {
  constructor(public readonly id: number) {
    super(`Restaurant ${id} was not found`);
    this.name = 'RestaurantNotFoundError';
  }
}
