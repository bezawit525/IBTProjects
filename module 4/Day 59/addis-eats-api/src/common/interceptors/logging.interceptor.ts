import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { tap, type Observable } from 'rxjs';
import type { Request } from 'express';
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = ctx.switchToHttp().getRequest<Request>();
    const started = Date.now();
    const id = req.headers['x-request-id'] ?? 'missing';
    const handler = `${ctx.getClass().name}.${ctx.getHandler().name}`;
    return next.handle().pipe(tap({
      next: () => this.log(req, handler, id, started, 'ok'),
      error: (error: unknown) => this.log(req, handler, id, started, error instanceof Error ? error.name : 'error'),
    }));
  }
  private log(req: Request, handler: string, id: string | string[], started: number, outcome: string): void {
    this.logger.log(`${req.method} ${req.url} -> ${handler} ${outcome} ${Date.now() - started}ms [${id}]`);
  }
}
