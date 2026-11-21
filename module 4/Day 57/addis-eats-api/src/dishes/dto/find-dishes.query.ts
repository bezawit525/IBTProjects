import { Transform, Type } from 'class-transformer';
import { IsArray, IsIn, IsInt, IsOptional, IsString, Matches, Max, Min } from 'class-validator';

const splitCsv = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean) : value;

export class FindDishesQuery {
  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
  restaurantId?: number;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(50)
  limit = 20;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0)
  offset = 0;

  @IsOptional() @IsString() @Matches(/^-?(name|priceSantim|restaurantId)(,-?(name|priceSantim|restaurantId))*$/)
  sort = 'name';

  @IsOptional() @Transform(splitCsv) @IsArray() @IsIn(['id', 'name', 'restaurantId', 'priceSantim'], { each: true })
  fields?: string[];
}
