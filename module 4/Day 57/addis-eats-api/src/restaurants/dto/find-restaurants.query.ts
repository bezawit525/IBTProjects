import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsIn, IsInt, IsOptional, IsString, Matches, Max, Min } from 'class-validator';
import { AREAS } from '../../orders/order.types';

const splitCsv = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean) : value;

export class FindRestaurantsQuery {
  @IsOptional() @Transform(splitCsv) @IsArray() @IsIn([...AREAS], { each: true })
  area?: (typeof AREAS)[number][];

  @IsOptional()
  @Transform(({ value }) => value === 'true' ? true : value === 'false' ? false : value)
  @IsBoolean()
  isOpen?: boolean;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(50)
  limit = 20;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0)
  offset = 0;

  @IsOptional() @IsString() @Matches(/^-?(name|area)(,-?(name|area))*$/)
  sort = 'name';

  @IsOptional() @Transform(splitCsv) @IsArray() @IsIn(['id', 'name', 'area', 'isOpen'], { each: true })
  fields?: string[];
}
