export const AREAS = ['Bole', 'Piassa', 'Megenagna', 'Kazanchis'] as const;
export type Area = (typeof AREAS)[number];

export type OrderStatus =
  'pending' | 'preparing' | 'ready' | 'out-for-delivery' | 'delivered';

export interface Dish {
  name: string;
  price: number;
}

export interface Order {
  readonly id: number;
  customerName: string;
  area: Area;
  status: OrderStatus;
  dishes: Dish[];
  teleBirrPhone?: string;
  total: number;
}
