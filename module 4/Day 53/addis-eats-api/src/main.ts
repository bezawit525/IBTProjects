import { InMemoryOrderRepository, OrderService, type Order } from './orders';

const seedOrders: Order[] = [
  {
    id: 1,
    customerName: 'Abebe',
    area: 'Bole',
    status: 'pending',
    dishes: [
      { name: 'Kitfo', price: 350 },
      { name: 'Shiro', price: 250 },
    ],
    teleBirrPhone: '0912345678',
    total: 600,
  },
  {
    id: 2,
    customerName: 'Marta',
    area: 'Piassa',
    status: 'preparing',
    dishes: [{ name: 'Doro Wot', price: 400 }],
    total: 400,
  },
];

const repository = new InMemoryOrderRepository(seedOrders);

const service = new OrderService(repository);

console.log('Find order:', service.find(1));

console.log('All orders:', repository.all());

console.log('Fees by area:', service.feesByArea());

console.log('Customer names:', service.summarise('customerName'));

console.log('Order statuses:', service.summarise('status'));
