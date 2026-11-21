import {Type} from 'class-transformer';
import {ArrayNotEmpty,IsArray,IsBoolean,IsDate,IsInt,IsString,Length,Min,Max,Validate,ValidateNested,ValidateIf,IsIn} from 'class-validator';
import {IsTeleBirrNumber} from '../../common/validators/is-telebirr-number.validator.js';
import {IsSantimConstraint} from '../../common/validators/is-santim.constraint.js';
import {AREAS} from '../order.types.js';
import {ScheduledNeedsTime} from '../../common/validators/scheduled-needs-time.constraint.js';
export class OrderLineDto {
 @IsInt() @Min(1) dishId!:number;
 @IsInt() @Min(1) @Max(20) quantity!:number;
}
export class CreateOrderDto {
 @IsString() @Length(2,80) customer!:string;
 @IsInt() @Min(1) restaurantId!:number;
 @IsIn([...AREAS]) area!:string;
 @IsTeleBirrNumber() phone!:string;
 @Validate(IsSantimConstraint) totalSantim!:number;
 @IsArray() @ArrayNotEmpty() @ValidateNested({each:true}) @Type(()=>OrderLineDto) lines!:OrderLineDto[];
 @IsBoolean() isScheduled!:boolean;
 @ValidateIf((dto:object)=>(dto as CreateOrderDto).isScheduled) @Type(()=>Date) @IsDate() @Validate(ScheduledNeedsTime) scheduledFor?:Date;
}
