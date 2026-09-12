import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  @Post()
  create(
    @Body() createCourseDto: CreateCourseDto,
  ) {
    return this.coursesService.create(
      createCourseDto,
    );
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.coursesService.findOne(name);
  }

  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(
      name,
      updateCourseDto,
    );
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.coursesService.remove(name);
  }
}