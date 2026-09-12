import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../roles/roles.guard';import { Roles } from '../common/decorators/roles.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // =========================
  // PUBLIC ROUTES
  // =========================

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // =========================
  // PROTECTED ROUTE (AUTH + ROLE)
  // =========================

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  @Get('admin/all')
  findAllAdmin() {
    return this.userService.findAll();
  }
}