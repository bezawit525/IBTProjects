export class OrderNotFoundError extends Error { constructor(id:number){super(`Order ${id} not found`);this.name='OrderNotFoundError';} }
export class RestaurantNotFoundError extends Error { constructor(id:number){super(`Restaurant ${id} not found`);this.name='RestaurantNotFoundError';} }
export class RestaurantClosedError extends Error { constructor(id:number){super(`Restaurant ${id} is closed`);this.name='RestaurantClosedError';} }
export class DishNotOnMenuError extends Error { constructor(id:number){super(`Dish does not belong to restaurant ${id}`);this.name='DishNotOnMenuError';} }
export class InvalidTransitionError extends Error { constructor(from:string,to:string){super(`Cannot change order status from ${from} to ${to}`);this.name='InvalidTransitionError';} }

export class DishNotFoundError extends Error { constructor(id:number){super(`Dish ${id} not found`);this.name='DishNotFoundError';} }
export class PaymentDeclinedError extends Error { constructor(){super('Payment was declined');this.name='PaymentDeclinedError';} }
export class DuplicateNameError extends Error { constructor(name:string){super(`A resource named ${name} already exists`);this.name='DuplicateNameError';} }
