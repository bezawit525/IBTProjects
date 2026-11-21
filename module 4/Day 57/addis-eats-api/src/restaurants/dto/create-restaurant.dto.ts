import { IsBoolean, IsIn, IsOptional, IsString, Length } from 'class-validator';
import { AREAS } from '../../orders/order.types';

export class CreateRestaurantDto {
  @IsString() @Length(2, 80)
  name!: string;

  @IsIn([...AREAS])
  area!: (typeof AREAS)[number];

  @IsOptional() @IsBoolean()
  isOpen?: boolean;
}
