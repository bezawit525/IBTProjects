export const AREAS = ['Bole', 'Piassa', 'Megenagna', 'Kazanchis'] as const;
export type Area = (typeof AREAS)[number];

export const ORDER_STATUSES = [
  'pending',
  'preparing',
  'ready',
  'out-for-delivery',
  'delivered',
] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export interface Order {
  readonly id: number;
  customer: string;
  area: Area;
  status: OrderStatus;
  restaurantId: number;
  totalSantim: number;
}
