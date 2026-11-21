import { ValidatorConstraint, type ValidatorConstraintInterface, type ValidationArguments } from 'class-validator';
@ValidatorConstraint({name:'scheduledNeedsTime',async:false})
export class ScheduledNeedsTime implements ValidatorConstraintInterface {
 validate(value:unknown,args:ValidationArguments):boolean {
  const dto=args.object as {isScheduled?:boolean};
  if(!dto.isScheduled) return true;
  return value instanceof Date&&!Number.isNaN(value.getTime())&&value.getTime()>Date.now();
 }
 defaultMessage():string {return 'scheduledFor must be a future time when isScheduled is true';}
}
