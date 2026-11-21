import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import { ConfigService } from '../config.service.js';
interface RequestWithUser extends Request { user?: { roles: string[] } }
@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<RequestWithUser>();
    if (req.method !== 'DELETE') return true;
    const key = req.headers['x-api-key'];
    if (!key) throw new UnauthorizedException('x-api-key is required');
    const expected = this.config.get('API_KEY');
    if (!expected || key !== expected) throw new ForbiddenException('Invalid API key');
    // Temporary identity scaffold until the JWT guard is introduced in Week 12.
    req.user = { roles: ['staff'] };
    return true;
  }
}
