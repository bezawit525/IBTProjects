export const ORDER_STATUSES=['PENDING','PREPARING','ON_THE_WAY','DELIVERED','CANCELLED'] as const;
export type OrderStatus=(typeof ORDER_STATUSES)[number];
export interface OrderLine {dishId:number;quantity:number;}
export interface Order {id:number;customer:string;restaurantId:number;area:string;phone:string;lines:OrderLine[];totalSantim:number;status:OrderStatus;isScheduled:boolean;scheduledFor?:Date;}
export const orders:Order[]=[
 {id:1,customer:'Abebe',restaurantId:1,area:'Bole',phone:'0912345678',lines:[{dishId:1,quantity:1}],totalSantim:35000,status:'PENDING',isScheduled:false},
 {id:2,customer:'Marta',restaurantId:2,area:'Kazanchis',phone:'0911111111',lines:[{dishId:3,quantity:1}],totalSantim:40000,status:'PREPARING',isScheduled:false},
 {id:3,customer:'Dawit',restaurantId:4,area:'Piassa',phone:'+251912345679',lines:[{dishId:7,quantity:2}],totalSantim:60000,status:'DELIVERED',isScheduled:false},
];
