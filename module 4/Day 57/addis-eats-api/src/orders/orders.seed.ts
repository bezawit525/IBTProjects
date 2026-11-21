import type { Order } from './order.types';

export const ORDER_SEED: Order[] = [
  { id: 1, customer: 'Abebe', area: 'Bole', status: 'pending', restaurantId: 1, totalSantim: 60000 },
  { id: 2, customer: 'Marta', area: 'Piassa', status: 'preparing', restaurantId: 2, totalSantim: 40000 },
  { id: 3, customer: 'Hana', area: 'Megenagna', status: 'ready', restaurantId: 3, totalSantim: 25000 },
  { id: 4, customer: 'Dawit', area: 'Kazanchis', status: 'out-for-delivery', restaurantId: 4, totalSantim: 22000 },
  { id: 5, customer: 'Selam', area: 'Bole', status: 'delivered', restaurantId: 1, totalSantim: 35000 },
  { id: 6, customer: 'Miki', area: 'Piassa', status: 'pending', restaurantId: 2, totalSantim: 25000 },
  { id: 7, customer: 'Nahom', area: 'Megenagna', status: 'preparing', restaurantId: 3, totalSantim: 40000 },
  { id: 8, customer: 'Rahel', area: 'Kazanchis', status: 'ready', restaurantId: 4, totalSantim: 35000 },
  { id: 9, customer: 'Bereket', area: 'Bole', status: 'pending', restaurantId: 1, totalSantim: 22000 },
  { id: 10, customer: 'Liya', area: 'Piassa', status: 'delivered', restaurantId: 2, totalSantim: 40000 },
  { id: 11, customer: 'Yonas', area: 'Megenagna', status: 'out-for-delivery', restaurantId: 3, totalSantim: 25000 },
  { id: 12, customer: 'Meron', area: 'Kazanchis', status: 'preparing', restaurantId: 4, totalSantim: 35000 },
  { id: 13, customer: 'Samrawit', area: 'Bole', status: 'ready', restaurantId: 1, totalSantim: 45000 },
  { id: 14, customer: 'Fitsum', area: 'Piassa', status: 'pending', restaurantId: 2, totalSantim: 30000 },
];
