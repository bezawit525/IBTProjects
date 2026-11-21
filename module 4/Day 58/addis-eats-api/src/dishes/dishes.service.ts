import {Injectable} from '@nestjs/common';
import {dishes,type Dish} from './dish.types.js';
@Injectable()
export class DishesService {
 all():Dish[]{return dishes;}
 findOne(id:number):Dish|undefined{return dishes.find(d=>d.id===id);}
 findByIds(ids:number[]):Dish[]{return dishes.filter(d=>ids.includes(d.id));}
}
