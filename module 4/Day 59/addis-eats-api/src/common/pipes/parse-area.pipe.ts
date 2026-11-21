import { BadRequestException, Injectable, type ArgumentMetadata, type PipeTransform } from '@nestjs/common';
import { AREAS, type Area } from '../../orders/order.types.js';
@Injectable()
export class ParseAreaPipe implements PipeTransform<string | undefined, Area | undefined> {
  transform(value: string | undefined, metadata: ArgumentMetadata): Area | undefined {
    if (value === undefined || value === '') return undefined;
    const normalised = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    if (!(AREAS as readonly string[]).includes(normalised)) {
      throw new BadRequestException(`${metadata.data ?? 'area'} must be one of: ${AREAS.join(', ')}`);
    }
    return normalised as Area;
  }
}
