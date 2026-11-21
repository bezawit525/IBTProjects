import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Min,
} from 'class-validator';
import type { Area } from '../order.types';

export class CreateOrderDto {
  @IsString()
  customer!: string;

  @IsIn(['Bole', 'Piassa', 'Megenagna', 'Kazanchis'])
  area!: Area;

  @IsInt()
  @Min(1)
  totalSantim!: number;

  @IsOptional()
  @Matches(/^09\d{8}$/, {
    message: 'phone must be a valid TeleBirr number',
  })
  phone?: string;
}
