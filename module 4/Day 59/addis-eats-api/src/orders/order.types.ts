export const AREAS = ['Bole', 'Piassa', 'Megenagna', 'Kazanchis'] as const;
export type Area = (typeof AREAS)[number];
export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'out-for-delivery' | 'delivered';
export interface Dish { name: string; price: number; }
export interface Order {
  readonly id: number;
  customerName: string;
  area: Area;
  status: OrderStatus;
  dishes: Dish[];
  teleBirrPhone?: string;
  total: number;
}
export const orders: Order[] = [
  { id: 1, customerName: 'Abebe', area: 'Bole', status: 'pending', dishes: [{ name: 'Kitfo', price: 350 }, { name: 'Shiro', price: 250 }], teleBirrPhone: '0912345678', total: 600 },
  { id: 2, customerName: 'Marta', area: 'Piassa', status: 'preparing', dishes: [{ name: 'Doro Wot', price: 400 }], total: 400 },
  { id: 3, customerName: 'Dawit', area: 'Megenagna', status: 'ready', dishes: [{ name: 'Tibs', price: 450 }], total: 450 },
];
