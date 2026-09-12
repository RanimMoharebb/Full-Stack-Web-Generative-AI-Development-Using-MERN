import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
// import { AppService } from './app.service';
import { AppMockService } from './app.mock.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppMockService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  helloPath(): string {
    return this.appService.greeting('ahmed');
  }
  @Post()
  create(): string {
    return this.appService.createGreeting();
  }
  @Put()
  update(): string {
    return this.appService.createGreeting();
  }
  @Patch()
  patchUpdate(): string {
    return this.appService.createGreeting();
  }
  @Delete()
  deleteItem(): string {
    return this.appService.createGreeting();
  }
}

// import express => router.get('/',()=>{
//  return 'hello world'
// })
// import express => router.get('/',this.appService.getHello)
// import express => router.post('/',this.appService.getHello)
// import express => router.put('/',this.appService.getHello)\
// app.use('/user',userRoutes)
