export class OrderNotFoundError extends Error {
  constructor(public readonly id: number) {
    super(`Order ${id} was not found`);
    this.name = 'OrderNotFoundError';
  }
}
