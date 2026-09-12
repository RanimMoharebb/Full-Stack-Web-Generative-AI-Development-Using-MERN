/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const currentUser = createParamDecorator(
  (data: any, context: ExecutionContext): any => {
    const req = context.switchToHttp().getRequest();
    return req['user'];
  },
);
