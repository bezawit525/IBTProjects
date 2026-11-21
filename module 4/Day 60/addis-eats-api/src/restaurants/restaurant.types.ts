export const RESTAURANT_AREAS = ['Bole','Piassa','Megenagna','Kazanchis'] as const;
export type RestaurantArea = (typeof RESTAURANT_AREAS)[number];
export interface Restaurant { id:number; name:string; area:RestaurantArea; isOpen:boolean; }
export const restaurants:Restaurant[]=[{id:1,name:'Habesha 2000',area:'Bole',isOpen:true},{id:2,name:'Yod Abyssinia',area:'Kazanchis',isOpen:true},{id:3,name:'Kategna',area:'Megenagna',isOpen:false},{id:4,name:'Lucy',area:'Piassa',isOpen:true}];
