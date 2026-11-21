import {Controller,Get,NotFoundException,Param,ParseIntPipe,Query} from '@nestjs/common';
import {DishesService} from './dishes.service.js';
@Controller({path:'dishes',version:'1'})
export class DishesController {
 constructor(private readonly service:DishesService){}
 @Get() all(@Query('restaurantId') restaurantId?:string){return restaurantId?this.service.all().filter(d=>d.restaurantId===Number(restaurantId)):this.service.all();}
 @Get(':id') one(@Param('id',ParseIntPipe) id:number){const d=this.service.findOne(id);if(!d)throw new NotFoundException(`Dish ${id} not found`);return d;}
}
