import { Controller,Get,Param,ParseIntPipe } from '@nestjs/common';
import { ApiTags,ApiOperation,ApiOkResponse,ApiNotFoundResponse } from '@nestjs/swagger';
import { RestaurantsService } from './restaurants.service.js';
@ApiTags('restaurants')
@Controller({path:'restaurants',version:'1'})
export class RestaurantsController {
 constructor(private readonly service:RestaurantsService){}
 @Get() @ApiOperation({summary:'List all restaurants'}) @ApiOkResponse({description:'Restaurants, including kitchens that are currently closed'}) findAll(){return this.service.findAll();}
 @Get(':id') @ApiOperation({summary:'Get one restaurant by id'}) @ApiOkResponse({description:'Restaurant details'}) @ApiNotFoundResponse({description:'Restaurant does not exist'}) findOne(@Param('id',ParseIntPipe) id:number){return this.service.findOne(id);}
 @Get(':id/dishes') @ApiOperation({summary:'List dishes for a restaurant'}) @ApiOkResponse({description:'Restaurant menu'}) @ApiNotFoundResponse({description:'Restaurant does not exist'}) findDishes(@Param('id',ParseIntPipe) id:number){return this.service.findDishes(id);}
}
