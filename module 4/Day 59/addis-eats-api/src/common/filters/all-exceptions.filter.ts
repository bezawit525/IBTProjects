import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import type { Request, Response } from 'express';
import { OrderNotFoundError } from '../errors/domain.errors.js';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | object = 'Internal server error';
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const body = exception.getResponse();
      message = typeof body === 'object' && body !== null && 'message' in body ? (body as {message: string | object}).message : exception.message;
    } else if (exception instanceof OrderNotFoundError) {
      status = HttpStatus.NOT_FOUND; message = exception.message;
    } else {
      this.logger.error(exception instanceof Error ? exception.stack : String(exception));
    }
    res.status(status).json({ statusCode: status, message, path: req.url, timestamp: new Date().toISOString(), requestId: req.headers['x-request-id'] ?? null });
  }
}
