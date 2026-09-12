import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const req: Request = ctx.getRequest();
    const requiredRoles: string[] = this.reflector.get(
      'Roles',
      context.getHandler(),
    );
    if (!requiredRoles.includes(req.headers.role as string)) {
      return false;
    }
    return true;
  }
}
