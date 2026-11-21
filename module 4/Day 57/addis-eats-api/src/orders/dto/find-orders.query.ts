import { Transform, Type } from 'class-transformer';
import { IsArray, IsIn, IsInt, IsOptional, IsString, Matches, Max, Min } from 'class-validator';
import { AREAS, ORDER_STATUSES } from '../order.types';

const splitCsv = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean) : value;

export class FindOrdersQuery {
  @IsOptional() @Transform(splitCsv) @IsArray() @IsIn([...ORDER_STATUSES], { each: true })
  status?: (typeof ORDER_STATUSES)[number][];

  @IsOptional() @Transform(splitCsv) @IsArray() @IsIn([...AREAS], { each: true })
  area?: (typeof AREAS)[number][];

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(50)
  limit = 10;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0)
  offset = 0;

  @IsOptional() @IsString() @Matches(/^-?(customer|totalSantim|area|status|restaurantId)(,-?(customer|totalSantim|area|status|restaurantId))*$/)
  sort = 'customer';

  @IsOptional() @Transform(splitCsv) @IsArray() @IsIn(
    ['id', 'customer', 'area', 'status', 'restaurantId', 'totalSantim'],
    { each: true },
  )
  fields?: string[];
}
