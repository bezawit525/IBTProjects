import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, type Observable } from 'rxjs';
import type { Request } from 'express';
/** Teaching example only. Do not register: wrapping every response would break the published API contract. */
@Injectable()
export class EnvelopeInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = ctx.switchToHttp().getRequest<Request>();
    return next.handle().pipe(map((data: unknown) => ({ data, requestId: req.headers['x-request-id'], timestamp: new Date().toISOString() })));
  }
}
