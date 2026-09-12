import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { CourcesService } from './cources.service';
import { CreateCourceDto } from './dto/create-cource.dto';
import { UpdateCourceDto } from './dto/update-cource.dto';
import { RoleGuard } from 'src/guard/role/role.guard';
import { ResponseInterceptor } from 'src/interceptors/response/response.interceptor';

@Controller('cources')
// @UseGuards(RoleGuard)
@SetMetadata('RequiredRoles', ['SuperAdmin'])
export class CourcesController {
  constructor(private readonly courcesService: CourcesService) {}

  @Post()
  create(@Body() createCourceDto: CreateCourceDto) {
    return this.courcesService.create(createCourceDto);
  }

  @Get()
  @SetMetadata('RequiredRoles', ['Admin', 'SuperAdmin'])
  @UseGuards(RoleGuard)
  @UseInterceptors(ResponseInterceptor)
  findAll() {
    return this.courcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courcesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourceDto: UpdateCourceDto) {
    return this.courcesService.update(+id, updateCourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courcesService.remove(+id);
  }
}
