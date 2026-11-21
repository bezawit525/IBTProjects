import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';
import { AREAS, ORDER_STATUSES } from '../order.types';

export class FindOrdersQuery {
  @IsOptional()
  @IsIn([...ORDER_STATUSES])
  status?: (typeof ORDER_STATUSES)[number];

  @IsOptional()
  @IsIn([...AREAS])
  area?: (typeof AREAS)[number];

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(50)
  limit = 10;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0)
  offset = 0;

  @IsOptional() @IsIn(['customer', 'totalSantim'])
  sort: 'customer' | 'totalSantim' = 'customer';
}
