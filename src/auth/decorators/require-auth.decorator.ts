import { applyDecorators, UseGuards } from '@nestjs/common';
import { RoleProtected } from './role-protected.decorator';
import { RoleGuard } from '../guards/role.guard';
import { Role } from '../enum/role.enum';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

export function RequireAuth(...roles: Role[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(JwtAuthGuard, RoleGuard),
  );
}