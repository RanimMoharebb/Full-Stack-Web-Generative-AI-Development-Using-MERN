import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  HttpException,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseInterceptor } from 'src/interceptors/response/response.interceptor';
import { rolesEnum } from 'src/common/enums/roles.enum';
import { RoleGuard } from 'src/guards/role/role.guard';
import { RoleDecorator } from 'src/common/decorators/role.decorator';

@Controller('users')
@UsePipes(new ValidationPipe({ transform: true }))
@UseInterceptors(ResponseInterceptor)
// @SetMetadata('Roles',[rolesEnum.SUPER_ADMIN])
@RoleDecorator(rolesEnum.SUPER_ADMIN)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body(new ValidationPipe({ transform: true })) createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }
  @Post('login')
  login(
    @Body(new ValidationPipe({ transform: true })) createUserDto: CreateUserDto,
  ) {
    return this.usersService.login(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  // @SetMetadata('Rolees', [rolesEnum.ADMIN, rolesEnum.SUPER_ADMIN])
  @RoleDecorator(rolesEnum.ADMIN, rolesEnum.SUPER_ADMIN)
  @UseGuards(RoleGuard)
  findOne(
    @Param(
      'id',
      // new ParseIntPipe({
      //   exceptionFactory: () => {
      //     return new HttpException('id must be number', HttpStatus.BAD_REQUEST);
      //   },
      // }),
    )
    id: string,
  ) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
