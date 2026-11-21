import type { Order } from './orders/order.types';

export const seedOrders: Order[] = [
  { id: 1, customerName: 'Abebe', area: 'Bole', status: 'pending', dishes: [{ name: 'Kitfo', price: 350 }], teleBirrPhone: '0912345678', total: 350 },
  { id: 2, customerName: 'Marta', area: 'Piassa', status: 'preparing', dishes: [{ name: 'Doro Wot', price: 400 }], total: 400 },
  { id: 3, customerName: 'Hana', area: 'Megenagna', status: 'ready', dishes: [{ name: 'Shiro', price: 250 }], total: 250 },
  { id: 4, customerName: 'Dawit', area: 'Kazanchis', status: 'pending', dishes: [{ name: 'Chechebsa', price: 220 }], total: 220 },
  { id: 5, customerName: 'Selam', area: 'Bole', status: 'delivered', dishes: [{ name: 'Kitfo', price: 350 }], total: 350 },
  { id: 6, customerName: 'Miki', area: 'Piassa', status: 'preparing', dishes: [{ name: 'Shiro', price: 250 }], total: 250 },
  { id: 7, customerName: 'Nahom', area: 'Megenagna', status: 'ready', dishes: [{ name: 'Doro Wot', price: 400 }], total: 400 },
  { id: 8, customerName: 'Rahel', area: 'Kazanchis', status: 'out-for-delivery', dishes: [{ name: 'Kitfo', price: 350 }], total: 350 },
  { id: 9, customerName: 'Bereket', area: 'Bole', status: 'pending', dishes: [{ name: 'Chechebsa', price: 220 }], total: 220 },
  { id: 10, customerName: 'Liya', area: 'Piassa', status: 'delivered', dishes: [{ name: 'Doro Wot', price: 400 }], total: 400 },
  { id: 11, customerName: 'Yonas', area: 'Megenagna', status: 'preparing', dishes: [{ name: 'Shiro', price: 250 }], total: 250 },
  { id: 12, customerName: 'Meron', area: 'Kazanchis', status: 'ready', dishes: [{ name: 'Kitfo', price: 350 }], total: 350 },
];
