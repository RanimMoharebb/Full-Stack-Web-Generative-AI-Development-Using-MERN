import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';

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
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  // =========================
  // PROFILE (CURRENT USER DECORATOR)
  // =========================

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() user: any) {
    return user;
  }

  // =========================
  // ADMIN ONLY ROUTE
  // =========================

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  @Get('admin/all')
  findAllAdmin() {
    return this.userService.findAll();
  }
}