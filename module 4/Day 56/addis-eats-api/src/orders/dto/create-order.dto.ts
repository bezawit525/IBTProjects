import { IsIn, IsInt, IsString, Min, MinLength } from 'class-validator';
import { AREAS } from '../order.types';

export class CreateOrderDto {
  @IsString() @MinLength(2)
  customer!: string;

  @IsIn([...AREAS])
  area!: (typeof AREAS)[number];

  @IsInt() @Min(1)
  restaurantId!: number;

  @IsInt() @Min(1)
  totalSantim!: number;
}
