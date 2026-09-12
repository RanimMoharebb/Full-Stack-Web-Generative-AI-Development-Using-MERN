import { Injectable } from '@nestjs/common';

@Injectable()
export class AppMockService {
  getHello(): string {
    return 'Hello World! !!!';
  }
  createGreeting(): string {
    return 'created successfully';
  }
  greeting(name: string): string {
    if (name == 'ahmed') {
      return 'hello Ahmed';
    }
    return 'helloo only';
  }
}
