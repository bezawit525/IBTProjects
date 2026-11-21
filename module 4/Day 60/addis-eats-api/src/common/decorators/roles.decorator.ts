import { SetMetadata } from '@nestjs/common';
export type Role = 'customer' | 'staff' | 'admin';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
