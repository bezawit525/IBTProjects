import { ValidatorConstraint, type ValidatorConstraintInterface, type ValidationArguments } from 'class-validator';
@ValidatorConstraint({name:'isSantim',async:false})
export class IsSantimConstraint implements ValidatorConstraintInterface {
 validate(value:unknown):boolean { return Number.isInteger(value)&&Number(value)>0&&Number(value)<=10_000_000; }
 defaultMessage(args:ValidationArguments):string {
  return `${args.property} must be a whole number of santim, between 1 and 10,000,000 (100,000 ETB)`;
 }
}
