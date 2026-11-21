import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import type { Request, Response } from 'express';
import { OrderNotFoundError, RestaurantNotFoundError, RestaurantClosedError, DishNotOnMenuError, InvalidTransitionError, DishNotFoundError, PaymentDeclinedError, DuplicateNameError } from '../errors/domain.errors.js';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
 private readonly logger=new Logger(AllExceptionsFilter.name);
 catch(exception:unknown,host:ArgumentsHost):void {
  const ctx=host.switchToHttp(); const res=ctx.getResponse<Response>(); const req=ctx.getRequest<Request>();
  const {status,message}=this.translate(exception);
  if(status>=500) this.logger.error(exception instanceof Error?exception.stack:String(exception));
  res.status(status).json({statusCode:status,message,path:req.url,timestamp:new Date().toISOString(),requestId:req.headers['x-request-id']??null});
 }
 private translate(e:unknown):{status:number;message:string|object} {
  if(e instanceof HttpException) {
   const body=e.getResponse();
   return {status:e.getStatus(),message:typeof body==='object'&&body!==null&&'message' in body?(body as {message:string|object}).message:e.message};
  }
  if(e instanceof OrderNotFoundError||e instanceof RestaurantNotFoundError||e instanceof DishNotFoundError) return {status:404,message:e.message};
  if(e instanceof RestaurantClosedError||e instanceof InvalidTransitionError) return {status:409,message:e.message};
  if(e instanceof DishNotOnMenuError) return {status:422,message:e.message};
  if(e instanceof PaymentDeclinedError) return {status:402,message:e.message};
  if(e instanceof DuplicateNameError) return {status:409,message:e.message};
  return {status:HttpStatus.INTERNAL_SERVER_ERROR,message:'Internal server error'};
 }
}
