import type { Area } from '../orders/order.types';
export interface Restaurant {
  readonly id: number;
  name: string;
  area: Area;
  isOpen: boolean;
}
