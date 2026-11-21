import { registerDecorator, type ValidationOptions } from 'class-validator';
export const TELEBIRR = /^(?:\+251|0)9\d{8}$/;
export function IsTeleBirrNumber(options?:ValidationOptions):PropertyDecorator {
 return (object,propertyName) => registerDecorator({
  name:'isTeleBirrNumber',target:object.constructor,propertyName:String(propertyName),options,
  validator:{validate:(value:unknown)=>typeof value==='string'&&TELEBIRR.test(value),
   defaultMessage:()=> 'phone must be a TeleBirr number: 09xxxxxxxx or +2519xxxxxxxx'},
 });
}
