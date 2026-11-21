import {Injectable} from '@nestjs/common';
import {restaurants,type Restaurant} from './restaurant.types.js';
import {RestaurantNotFoundError} from '../common/errors/domain.errors.js';
@Injectable()
export class RestaurantsService {
 all():Restaurant[]{return restaurants;}
 findOne(id:number):Restaurant {const r=restaurants.find(x=>x.id===id);if(!r)throw new RestaurantNotFoundError(id);return r;}
}
