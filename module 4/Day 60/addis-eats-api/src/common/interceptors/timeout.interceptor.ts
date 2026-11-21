import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { catchError, timeout, TimeoutError, throwError, type Observable } from 'rxjs';
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(_ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(timeout(5000), catchError((error: unknown) =>
      error instanceof TimeoutError ? throwError(() => new RequestTimeoutException('Request timed out after 5 seconds')) : throwError(() => error),
    ));
  }
}
