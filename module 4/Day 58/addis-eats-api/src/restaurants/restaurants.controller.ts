import {Controller,Get,Param,ParseIntPipe,Query} from '@nestjs/common';
import {RestaurantsService} from './restaurants.service.js';
@Controller({path:'restaurants',version:'1'})
export class RestaurantsController {
 constructor(private readonly service:RestaurantsService){}
 @Get() all(@Query('isOpen') isOpen?:string){return this.service.all().filter(r=>isOpen===undefined||String(r.isOpen)===isOpen);}
 @Get(':id') one(@Param('id',ParseIntPipe) id:number){return this.service.findOne(id);}
}
