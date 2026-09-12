import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('enter role guard');
    let methodHandler = context.getHandler();
    let classHandler = context.getClass();
    const request: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    // const requiredRole: any[] = this.reflector.get(
    //   'RequiredRoles',
    //   methodHandler,
    // );
    // const requiredRole: any[] = this.reflector.get(
    //   'RequiredRoles',
    //   classHandler,
    // );
    const requiredRole: any[] = this.reflector.getAllAndOverride(
      'RequiredRoles',
      [methodHandler, classHandler],
    );

    const requestRole: string = request.headers.role as string;
    console.log(methodHandler, classHandler);
    console.log(requiredRole);
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    if (!requiredRole.includes(requestRole)) {
      throw new UnauthorizedException();
    }
    // const token: string = request.headers.authorization as string;
    // console.log(token);
    // if (!token) {
    //   throw new UnauthorizedException();
    // }

    return true;
  }
}
