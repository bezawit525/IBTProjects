import {Module} from '@nestjs/common';
import {OrdersController,RestaurantOrdersController} from './orders.controller.js';
import {OrdersService} from './orders.service.js';
import {RestaurantsModule} from '../restaurants/restaurants.module.js';
import {IsSantimConstraint} from '../common/validators/is-santim.constraint.js';
import {ScheduledNeedsTime} from '../common/validators/scheduled-needs-time.constraint.js';
@Module({imports:[RestaurantsModule],controllers:[OrdersController,RestaurantOrdersController],providers:[OrdersService,IsSantimConstraint,ScheduledNeedsTime]})
export class OrdersModule {}
