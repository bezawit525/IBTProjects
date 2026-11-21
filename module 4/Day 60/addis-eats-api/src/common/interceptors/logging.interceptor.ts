import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { tap, type Observable } from 'rxjs';
import type { Request } from 'express';
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: PinoLogger) { this.logger.setContext(LoggingInterceptor.name); }
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = ctx.switchToHttp().getRequest<Request>();
    const started = Date.now();
    const handler = `${ctx.getClass().name}.${ctx.getHandler().name}`;
    return next.handle().pipe(tap({
      next: () => this.logger.info({ method: req.method, url: req.url, handler, durationMs: Date.now() - started, outcome: 'ok' }, 'request completed'),
      error: (error: unknown) => this.logger.error({ method: req.method, url: req.url, handler, durationMs: Date.now() - started, outcome: error instanceof Error ? error.name : 'error' }, 'request failed'),
    }));
  }
}
