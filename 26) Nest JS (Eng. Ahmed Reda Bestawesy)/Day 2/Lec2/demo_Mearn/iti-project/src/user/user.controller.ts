import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserList(): string {
    return this.userService.getUser();
  }
  @Get('/:id')
  helloPath(): string {
    return this.userService.getUserByID();
  }
  @Post()
  create(): string {
    return this.userService.addUser('data');
  }
  @Put()
  update(): string {
    return this.userService.editUser('data');
  }
  @Delete()
  deleteItem(): string {
    return this.userService.deleteUser(12);
  }
}

// import express => router.get('/',()=>{
//  return 'hello world'
// })
// import express => router.get('/',this.appService.getHello)
// import express => router.post('/',this.appService.getHello)
// import express => router.put('/',this.appService.getHello)\
// app.use('/user',userRoutes)
