export class OrderNotFoundError extends Error {
  constructor(id: number) { super(`Order ${id} not found`); this.name = 'OrderNotFoundError'; }
}
